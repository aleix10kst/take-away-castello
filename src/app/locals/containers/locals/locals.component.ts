import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Local} from '../../../core/models/local.model';

@Component({
  selector: 'tac-locals',
  templateUrl: './locals.component.html',
  styleUrls: ['./locals.component.scss']
})
export class LocalsComponent implements OnInit, AfterViewInit {

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
    },
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
    },
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
    },  {
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

  gridMode: 'list' | 'cards' = 'list';

  constructor() { }

  ngOnInit(): void {
  }

  onClickChangeGrid(grid: 'list' | 'cards'): void {
    this.gridMode = grid;
  }

  ngAfterViewInit(): void {
  }

}
