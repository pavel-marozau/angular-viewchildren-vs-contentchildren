import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent, Pane, Tab } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, Pane, Tab, ],
  bootstrap:    [ AppComponent, ]
})
export class AppModule { }
