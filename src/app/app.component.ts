import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Aikatsular';
  imgUrl: string;
  imgLoaded: boolean;

  constructor(private storage: AngularFireStorage) {}

  ngOnInit() {
    this.storage
      .ref('images/sumire001.png')
      .getDownloadURL()
      .subscribe(image => {
        this.imgUrl = image;
      });
  }
}
