import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FbService } from '../../services/fb/fb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities: Observable<any>;
  constructor(public fb: FbService) { }

  ngOnInit(): void {
    this.cities = this.fb.getCities();
  }

}
