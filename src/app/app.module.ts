import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { BoardComponent } from './board/board.component';
import { ToggleFlagComponent } from './toggle-flag/toggle-flag.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    BoardComponent,
    ToggleFlagComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
