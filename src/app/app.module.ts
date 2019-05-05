import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { CheckStatusPipe } from './pipes/check-status/check-status.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CheckStatusPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCV-VtxE4ytyWoxDgzbcIKqBVlb2wxakrU'
    })

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
