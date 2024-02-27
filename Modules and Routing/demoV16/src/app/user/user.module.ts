import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { Test } from '../test';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule],
  providers: [Test],
  exports: [ListComponent],
})
export class UserModule {}
