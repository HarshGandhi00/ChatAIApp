import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainComponent } from './pages/train/train.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { CatchComponent } from './pages/catch/catch.component';
import { IntentsComponent } from './pages/intents/intents.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'train' },
  { path: 'train', component: TrainComponent },
  { path: 'intents', component: IntentsComponent },
  { path: 'catch', component: CatchComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: '**', component: TrainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
