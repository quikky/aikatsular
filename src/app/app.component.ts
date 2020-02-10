import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Aikatsular';
  bgImgUrlofPreload: string;
  bgImgUrlofPreloaded: string;

  constructor(private storage: AngularFireStorage) {}

  ngOnInit() {
    this.storage
      .ref('images/thirdparty-logos/star-guardian.png')
      .getDownloadURL()
      .subscribe(image => {
        this.bgImgUrlofPreload = image;
      });
  }
}
