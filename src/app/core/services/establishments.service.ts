import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Establishment} from '../models/establishment.model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {ESTABLISHMENTS_COLLECTION} from '../../shared/constants/firebase.constants';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentsService {

  private establishmentsCollection: AngularFirestoreCollection<Establishment>;

  constructor(private afs: AngularFirestore) {
    this.establishmentsCollection = this.afs.collection(ESTABLISHMENTS_COLLECTION);
  }

  getEstablishments(): Observable<Establishment[]> {
    return this.establishmentsCollection.valueChanges();
  }
}
