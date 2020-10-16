import { Component, OnInit } from '@angular/core';
import {Local} from '@core/models/local.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  locals: Local[] = [
    {
      name: 'JR'
    },
    {
      name: 'Portal de la Gallarda'
    },
    {
      name: 'La cosa nostra'
    },
    {
      name: 'La cosa nostra'
    },
    {
      name: 'La cosa nostra'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
