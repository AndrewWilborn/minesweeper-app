import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  board: string = "012345678                                                                                                                                                                                                                                                       "
  flagLocations: boolean[] = []
  gameId: string = "";
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
    this.flagLocations[10] = true;
  }
}
