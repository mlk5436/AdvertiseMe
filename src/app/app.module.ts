import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppComponent }  from './app.component';
platformBrowserDynamic().bootstrapModule(AppModule)
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
