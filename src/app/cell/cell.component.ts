import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() board!: string;
  @Input() cellId!: number;
  @Input() gameId!: string;
  @Input() flagMode!: boolean;
  @Input() flagLocations!: boolean[];
  @Output() boardChanged = new EventEmitter<string>();
  @Output() gameChanged = new EventEmitter<string>();
  @Output() flagsChanged = new EventEmitter<boolean[]>();
  numberArr: string[] = ["bg-blank", "bg-one", "bg-two", "bg-three", "bg-four", "bg-five", "bg-six", "bg-seven", "bg-eight"];

  isNumber(x: string) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    return numbers.includes(x);
  }

  async clickHandler() {
    if (!this.flagMode && !this.flagLocations[this.cellId]) {
      this.gameId = "test"
      this.gameChanged.emit(this.gameId)
      this.board = this.board.substring(0, this.cellId) + '8' + this.board.substring(this.cellId + 1)
      this.boardChanged.emit(this.board)
      if (!this.gameId) {
        try {
          const response = await fetch("")
            .then(response => response.json())
            .then(data => {
              this.gameId = data;
            })
          this.board = this.board.substring(0, this.cellId) + '8' + this.board.substring(this.cellId + 1)
        } catch (error: any) {
          console.error(error.message)
        }
      }
    }
    else if (this.flagMode) {
      this.flagLocations[this.cellId] = !this.flagLocations[this.cellId]
      this.flagsChanged.emit(this.flagLocations)
    }
  }
}
