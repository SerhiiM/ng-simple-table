import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSimpleTableComponent } from './ng-simple-table.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [NgSimpleTableComponent],
  exports: [NgSimpleTableComponent]
})
export class NgSimpleTableModule { }
