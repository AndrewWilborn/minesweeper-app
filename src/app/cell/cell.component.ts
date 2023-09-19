import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  // address:string = "http://localhost:5062";
  address:string = "https://ajw-minesweeper.azurewebsites.net/"

  @Input() board!: string;
  @Input() cellId!: number;
  @Input() gameId!: string;
  @Input() flagMode!: boolean;
  @Input() flagLocations!: boolean[];
  @Output() boardChanged = new EventEmitter<string>();
  @Output() gameChanged = new EventEmitter<string>();
  @Output() flagsChanged = new EventEmitter<boolean[]>();
  @Output() gameOver = new EventEmitter();
  @Output() win = new EventEmitter();
  numberArr: string[] = ["bg-blank", "bg-one", "bg-two", "bg-three", "bg-four", "bg-five", "bg-six", "bg-seven", "bg-eight"];

  isNumber(x: string) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    return numbers.includes(x);
  }

  async clickHandler() {
    if (!this.flagMode && !this.flagLocations[this.cellId]) {
      if (!this.gameId) {
        try {
          await fetch(`${this.address}/newGame?firstMove=${this.cellId}`,
            {
              method: 'POST',
            })
            .then(response => response.json())
            .then(data => {
              this.gameId = data;
              this.gameChanged.emit(this.gameId)
            })
        } catch (error: any) {
          console.error(error.message)
        }
      }
      try {
        await fetch(`${this.address}/move?move=${this.cellId}&uuid=${this.gameId}`,
          {
            method: 'POST',
          })
          .then(response => response.json())
          .then(data => {
            this.board = data.board;
            this.boardChanged.emit(this.board)

            if(data.isFinished){
              if(data.victory){
                this.win.emit()
              } else {
                this.gameOver.emit()
              }
            }
          })
      } catch (error: any) {
        console.error(error.message)
      }
    }
    else if (this.flagMode) {
      this.flagLocations[this.cellId] = !this.flagLocations[this.cellId]
      this.flagsChanged.emit(this.flagLocations)
    }
  }

  rightClickHandler() {
    this.flagLocations[this.cellId] = !this.flagLocations[this.cellId]
    this.flagsChanged.emit(this.flagLocations)
    return false
  }

  async numberReveal(){
    const adjacentCells = [-17, -16, -15, -1, 1, 15, 16, 17];
    const leftExceptions = [-17, -1, 15];
    const rightExceptions = [-15, 1, 17];
    // if the number of ajacent flags is equal to the number on the cell
    let adjacentFlags = 0;
    for(let i = 0; i < adjacentCells.length; i++){
      if(this.cellId % 16 == 0 && leftExceptions.includes(adjacentCells[i])) continue;
      if(this.cellId % 16 == 15 && rightExceptions.includes(adjacentCells[i])) continue;
      if(this.flagLocations[this.cellId + adjacentCells[i]]){
        adjacentFlags++;
      }
    }
    // @ts-ignore
    if(this.board[this.cellId] != adjacentFlags){ // Intentional use of non-strict equality
      console.log("number does not match flag count, returning")
      return;
    }
    
    // reveal all of the non-flagged, unrevealed, adjacent cells
    for(let i = 0; i < adjacentCells.length; i++){
      if(this.flagLocations[this.cellId+adjacentCells[i]]) continue;
      if(this.cellId % 16 == 0 && leftExceptions.includes(adjacentCells[i])) continue;
      if(this.cellId % 16 == 15 && rightExceptions.includes(adjacentCells[i])) continue;
      try {
        await fetch(`${this.address}/move?move=${this.cellId+adjacentCells[i]}&uuid=${this.gameId}`,
          {
            method: 'POST',
          })
          .then(response => response.json())
          .then(data => {
            this.board = data.board;
            
            if(data.isFinished){
              if(data.victory){
                this.win.emit()
              } else {
                this.gameOver.emit()
              }
            }
          })
      } catch (error: any) {
        console.error(error.message)
      }
    }
    this.boardChanged.emit(this.board)
  }
}
