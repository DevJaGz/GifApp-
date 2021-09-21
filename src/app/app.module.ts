import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DockModule} from 'primeng/dock';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
