import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() cellVal!: string;
  @Input() numberCellVal!:number;
  numberArr: string[] = ["bg-blank", "bg-one", "bg-two", "bg-three", "bg-four", "bg-five", "bg-six", "bg-seven", "bg-eight"];

  isNumber(x:string){
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
    return numbers.includes(x)
  }
}
