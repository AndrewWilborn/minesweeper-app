import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  board:string = "012345678                                                                                                                                                                                                                                                       "
  gameId:string = "";
  idArray(x:number){
    let returnArr = [];
    for(let i = 0; i < x; i++){
      returnArr.push(i);
    }
    return returnArr;
  }

  onStringChanged(newBoard: string) {
    this.board = newBoard;
  }
}
