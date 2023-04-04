import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntentsComponent } from './intents.component';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@NgModule({
  imports: [
    CommonModule,
    NzIconModule,
    NzDropDownModule,
    NzCollapseModule
  ],
  declarations: [IntentsComponent]
})
export class IntentsModule { }
