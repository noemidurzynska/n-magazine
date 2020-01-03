import { Component, OnInit } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-strona',
  templateUrl: './strona.component.html',
  styleUrls: ['./strona.component.less']
})
export class StronaComponent implements OnInit {

  public zmiennaGlobalna: string;
  public age: number = 18;


  constructor() { }

  ngOnInit() {
    this.metodaNo3('napisek drugi');
    this.metodaNo1();
  }

  public metodaNo1(): boolean {
    this.zmiennaGlobalna = 'To jest napis';
    return true;

  }

  public metodaNo2(): void {

    this.zmiennaGlobalna = 'To jest inny napis';

  }

  public metodaNo3(trescWiadomosci: string): void {
    this.zmiennaGlobalna = trescWiadomosci;
  }
}
