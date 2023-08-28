import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() cellVal!: string;
  @Input() numberCellVal!:number;
  colorArr: string[] = ["text-white", "text-one", "text-two", "text-three", "text-four", "text-five", "text-six", "text-seven", "text-eight"];
}
