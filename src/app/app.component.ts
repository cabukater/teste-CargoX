import { Component } from '@angular/core';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cargoX';

  data: any;
  newPolyline = {color: 'blue'};

  longDest: number;
  longOrg: number;
  latDest: number;
  latOrg: number;



  //pegar dado para enviar para o timeline status




  constructor( private http: HttpClient){
    this.getData();


  }


  getData() {
  return  this.http.get('http://www.mocky.io/v2/5c7552e43100009c20c23450')
  .subscribe( res => {
    this.data = res;
    console.log(this.data);
    this.latOrg = Number(this.data.origin.latitude);
    this.latDest = Number(this.data.destination.latitude);
    this.longOrg = Number(this.data.origin.longitude);
    this.longDest = Number(this.data.destination.longitude);

  });

  }






}
