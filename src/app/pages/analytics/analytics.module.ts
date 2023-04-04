import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NzIconModule,
    NzTableModule,
    NzDividerModule
  ],
  declarations: [AnalyticsComponent]
})
export class AnalyticsModule { }
