import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.less']
})
export class TablesComponent implements OnInit {

  public writeyournote = '';
  constructor() { }

  ngOnInit() {
    this.writeyournote = 'h e l l o';
  }

}
