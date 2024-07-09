import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello.components';
@NgModule({
    declarations: [
        HelloComponent
    ],
    imports: [
        AppComponent,
      BrowserModule
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModule { }