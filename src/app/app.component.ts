import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tabs = [
    {
      name: 'Train your bot',
      description: 'Improve performance by providing user utternaces or frequently asked questions'
    },
    {
      name: 'Intents',
      description: `View all intents you've created to improve the bot performance`
    },
    {
      name: 'Catch all',
      description: 'Setup flows to handle unasnwered or not helpful responses'
    },
    {
      name: 'Analytics',
      description: 'Learn how your bot is performing and how you can make it better'
    }
  ];

  activeTabId: number = 0;

  constructor (private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('train')) {
          this.activeTabId = 0;
        } else if (event.url.includes('intents')) {
          this.activeTabId = 1;
        } else if (event.url.includes('catch')) {
          this.activeTabId = 2;
        } else if (event.url.includes('analytics')) {
          this.activeTabId = 3;
        } else {
          this.activeTabId = 0;
        }
      }
    });
  }

  ngOnInit(): void { }

  onTabChange(tab): void {
    switch (tab.name) {
      case 'Train your bot':
        this.router.navigate(['train']);
        break;

      case 'Intents':
        this.router.navigate(['intents']);
        break;

      case 'Catch all':
        this.router.navigate(['catch']);
        break;

      case 'Analytics':
        this.router.navigate(['analytics']);
        break;

      default:
        break;
    }
  }
}
