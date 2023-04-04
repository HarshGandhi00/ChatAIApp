import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatchComponent } from './catch.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  imports: [
    CommonModule,
    NzIconModule,
    NzDropDownModule
  ],
  declarations: [CatchComponent]
})
export class CatchModule { }
