import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-flag',
  templateUrl: './toggle-flag.component.html',
  styleUrls: ['./toggle-flag.component.css']
})
export class ToggleFlagComponent {
  toggleFlag: boolean = true;

  handleClick(){
    this.toggleFlag = !this.toggleFlag
  }
}
