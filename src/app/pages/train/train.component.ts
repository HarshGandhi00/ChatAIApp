import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {
  addIntentModalVisible: boolean = false;
  viewIntentModalVisible: boolean = false;

  constructor() { }

  ngOnInit() { }
}
