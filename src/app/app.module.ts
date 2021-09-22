import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DockModule } from 'primeng/dock';
import { AppComponent } from './app.component';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DockModule,
    ListboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
