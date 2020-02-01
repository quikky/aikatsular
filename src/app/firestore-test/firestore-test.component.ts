import { Component, OnInit } from '@angular/core';
import { FirestoneTestService } from '../services/firestone-test.service';
import { CrazyFunkTemp } from '../interfaces/crazy-funk-temp';

@Component({
  selector: 'app-firestore-test',
  templateUrl: './firestore-test.component.html',
  styleUrls: ['./firestore-test.component.sass']
})
export class FirestoreTestComponent implements OnInit {
  datas: CrazyFunkTemp[];

  constructor(private firestoneTestService: FirestoneTestService) {}

  async ngOnInit() {
    this.datas = await this.firestoneTestService.getDatas();
  }
}
