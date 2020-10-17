import {Component, OnDestroy, OnInit} from '@angular/core';
import {Establishment} from '@core/models/establishment.model';
import {EstablishmentsService} from '@core/services/establishments.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'tac-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  establishments: Establishment[] = [];

  private subscriptions: Subscription = new Subscription();

  constructor(private establishmentsService: EstablishmentsService) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.establishmentsService.getEstablishments().subscribe((establishments) => this.establishments = establishments)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
