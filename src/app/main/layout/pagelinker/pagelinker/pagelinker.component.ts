import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagelinker',
  templateUrl: './pagelinker.component.html',
  styleUrls: ['./pagelinker.component.scss']
})
export class PagelinkerComponent implements OnInit {
  @Input() userType='home';
  constructor() { }

  ngOnInit(): void {
  }

}
