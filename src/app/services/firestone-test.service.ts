import { Injectable } from '@angular/core';
import { CrazyFunkTemp } from '../interfaces/crazy-funk-temp';
import {
  AngularFirestore,
  QueryDocumentSnapshot,
  DocumentData
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoneTestService {
  constructor(private firestore: AngularFirestore) {}

  async getDatas(): Promise<CrazyFunkTemp[]> {
    const data = await this.firestore
      .collection<CrazyFunkTemp>('crazy-funk-temp')
      .get()
      .toPromise();
    return data.docs.map<CrazyFunkTemp>(doc => this.toBlog(doc));
  }

  async getData(docId: string): Promise<CrazyFunkTemp> {
    if (docId) {
      const doc = await this.firestore
        .collection<CrazyFunkTemp>('crazy-funk-temp')
        .doc(docId)
        .get()
        .toPromise();
      return this.toBlog(doc);
    } else {
      return null;
    }
  }

  private toBlog(doc: QueryDocumentSnapshot<DocumentData>) {
    // ドキュメントフィールドにIDがないため、ドキュメントIDを付与したデータに変換して返却
    return Object.assign({ id: doc.id }, doc.data()) as CrazyFunkTemp;
  }
}
