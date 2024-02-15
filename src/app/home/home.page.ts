import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  n1 = '';
  n2 = '';
  res = 0;

  somar(){
    this.res = parseFloat(this.n1)+parseFloat(this.n2);
  }
  subtrair(){
    this.res = parseFloat(this.n1)-parseFloat(this.n2);
  }
  multiplicar(){
    this.res = parseFloat(this.n1)*parseFloat(this.n2);
  }
  dividir(){
    this.res = parseFloat(this.n1)/parseFloat(this.n2);
  }

}
