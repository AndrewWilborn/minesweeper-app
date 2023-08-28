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
}
