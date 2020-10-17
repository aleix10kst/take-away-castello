import {Component, OnDestroy, OnInit} from '@angular/core';
import {Establishment} from '../../../core/models/establishment.model';
import {EstablishmentsService} from '../../../core/services/establishments.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'tac-establishments',
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.scss']
})
export class EstablishmentsComponent implements OnInit, OnDestroy {

  establishments: Establishment[] = [];

  gridMode: 'list' | 'cards' = 'cards';

  private subscriptions: Subscription = new Subscription();

  constructor(private establishmentsService: EstablishmentsService) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.establishmentsService.getEstablishments().subscribe((Establishments: Establishment[]) => this.establishments = Establishments)
    );
  }

  onClickChangeGrid(grid: 'list' | 'cards'): void {
    this.gridMode = grid;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
