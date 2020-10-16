import {Component, Input, OnInit} from '@angular/core';
import {Local} from '@core/models/local.model';

@Component({
  selector: 'app-local-card',
  templateUrl: './local-card.component.html',
  styleUrls: ['./local-card.component.scss']
})
export class LocalCardComponent implements OnInit {

  @Input() local: Local;

  constructor() { }

  ngOnInit(): void {
  }

}
