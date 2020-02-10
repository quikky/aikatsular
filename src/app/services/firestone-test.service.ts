import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  QueryDocumentSnapshot,
  DocumentData,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class FirestoneTestService {
  category: Observable<Category[]>;

  constructor(private firestore: AngularFirestore) {
    this.category = firestore.collection<Category>('/category').valueChanges();
  }
}
