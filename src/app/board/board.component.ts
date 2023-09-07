import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  board: string = "                                                                                                                                                                                                                                                                "
  flagLocations: boolean[] = [];
  gameId: string = "";
  minesLeft: Number = 50;
  idArray(x: number) {
    let returnArr = [];
    for (let i = 0; i < x; i++) {
      returnArr.push(i);
    }
    return returnArr;
  }

  onBoardChanged(newBoard: string) {
    this.board = newBoard;
  }
  onGameIdChanged(gameId: string) {
    this.gameId = gameId;
  }
  onFlagChanged(newFlags: boolean[]) {
    this.flagLocations = newFlags;
    let numFlags = 0;
    for(let i = 0; i < this.flagLocations.length; i++){
      if(this.flagLocations[i]) numFlags++;
    }
    this.minesLeft = 50 - numFlags;
  }

  flagMode: boolean = false;
  @Output() modeChanged = new EventEmitter<boolean>();

  handleClick(){
    this.flagMode = !this.flagMode
    this.modeChanged.emit(this.flagMode)
  }
  
  constructor() {
    for (let i = 0; i < 256; i++) {
      this.flagLocations.push(false)
    }
  }
}
