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
  @Output() stringChanged = new EventEmitter<string>();
  numberArr: string[] = ["bg-blank", "bg-one", "bg-two", "bg-three", "bg-four", "bg-five", "bg-six", "bg-seven", "bg-eight"];

  isNumber(x:string){
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
    return numbers.includes(x)
  }

  onStringChange() {
    this.stringChanged.emit(this.board);
  }

  testMove() {
    
    this.board = this.board.substring(0, this.cellId) + '8' + this.board.substring(this.cellId+1)
  }
}
