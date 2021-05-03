import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor: string | undefined;
  @Input() progressColor: string | undefined;
  @Input() progress = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
