import { NgModule } from '@angular/core';

import { TrainComponent } from './train.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';


@NgModule({
  imports: [NzIconModule, NzModalModule, NzDropDownModule],
  declarations: [TrainComponent]
})
export class TrainModule { }
