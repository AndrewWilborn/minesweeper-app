import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  // address: string = "http://localhost:5062";
  address:string = "https://ajw-minesweeper.azurewebsites.net/"

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
    for (let i = 0; i < this.flagLocations.length; i++) {
      if (this.flagLocations[i]) numFlags++;
    }
    this.minesLeft = 50 - numFlags;
  }

  onGameOver() {
    alert("GAME OVER");
    location.reload();
  }

  async onWin() {
    // let time = -1000;
    // console.log(this.gameId);
    // try {
    //   await fetch(`${this.address}/move?uuid=${this.gameId}`,{
    //     method: 'POST',
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     time = data.time;
    //   })
    // } catch (error: any) {
    //   console.error(error.message)
    // }
    // alert(`YOU WIN Your time: ${time / 1000}`);
    alert('YOU WIN');
    location.reload();
  }

  flagMode: boolean = false;
  @Output() modeChanged = new EventEmitter<boolean>();

  handleClick() {
    this.flagMode = !this.flagMode
    this.modeChanged.emit(this.flagMode)
  }

  constructor() {
    for (let i = 0; i < 256; i++) {
      this.flagLocations.push(false)
    }
  }
}
