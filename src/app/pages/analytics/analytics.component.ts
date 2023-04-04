import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  listOfData: any[] = [
    {
      key: '1',
      intent: 'Greetings',
      message: 102,
      importance: '98%',
      accuracy: 1,
      catch: 10
    },
    {
      key: '2',
      intent: 'Bye',
      message: 54,
      importance: '2%',
      accuracy: .5,
      catch: 5
    },
    {
      key: '3',
      intent: 'Office hours',
      message: 10,
      importance: '5%',
      accuracy: 8,
      catch: 3
    },
    {
      key: '4',
      intent: 'Location',
      message: 45,
      importance: '34%',
      accuracy: 5.2,
      catch: 9
    }
  ];

  constructor() { }

  ngOnInit() { }
}
