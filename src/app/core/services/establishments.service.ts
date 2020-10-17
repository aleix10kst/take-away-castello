import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Establishment} from '../models/establishment.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentsService {

  constructor(private http: HttpClient) { }

  getEstablishments(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(`/assets/mocks/locals.json`);
  }
}
