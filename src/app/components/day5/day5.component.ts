import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.css']
})
export class Day5Component implements OnInit {

  users = [
    {
      id: 1,
      name : 'Leanne Graham',
      phone : '1-770-736-8031 x56442',
    },
    {
      id: 2,
      name : 'Ervin Howell',
      phone : '010-692-6593 x09125',
    },
    {
      id: 3,
      name : 'Clementine Bauch',
      phone : '1-463-123-44475',
    },
    {
      id: 4,
      name : 'Patricia Lebsack',
      phone : '493-170-9623 x156',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
