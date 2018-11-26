import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSimpleTableModule } from 'ng-simple-table';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgSimpleTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
