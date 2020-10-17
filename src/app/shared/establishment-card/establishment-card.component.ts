import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Establishment} from '@core/models/establishment.model';

@Component({
  selector: 'tac-establishment-card',
  templateUrl: './establishment-card.component.html',
  styleUrls: ['./establishment-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstablishmentCardComponent implements OnInit {

  @Input() establishment: Establishment;

  constructor() { }

  ngOnInit(): void {
  }

}
