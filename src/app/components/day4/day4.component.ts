import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day4',
  templateUrl: './day4.component.html',
  styleUrls: ['./day4.component.css']
})
export class Day4Component implements OnInit {

  user = {
    name : 'John Doe',
    age : 20,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
