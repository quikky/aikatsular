import { Component, OnInit } from '@angular/core';
import { FirestoneTestService } from '../services/firestone-test.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-firestore-test',
  templateUrl: './firestore-test.component.html',
  styleUrls: ['./firestore-test.component.sass']
})
export class FirestoreTestComponent implements OnInit {
  categorys: Observable<Category[]>;
  imgUrl: string;
  imgLoaded: boolean;

  constructor(
    private firestoneTestService: FirestoneTestService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.categorys = this.firestoneTestService.category;

    this.storage
      .ref('images/thirdparty-logos/spotify-logo.png')
      .getDownloadURL()
      .subscribe(image => {
        this.imgUrl = image;
      });
  }
}
