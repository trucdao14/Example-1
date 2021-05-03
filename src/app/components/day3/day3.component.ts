import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.css']
})
export class Day3Component implements OnInit {

  user = {
    name : 'John Doe',
    work : 'CEO & Founder, Example'
  };
  // tslint:disable-next-line:typedef
  showInfo(){
    alert('Hi');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
