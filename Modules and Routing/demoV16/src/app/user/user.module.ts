import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './list/list.component';
import { Test } from '../test';
import { UserDetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'user/list',
        component: UserListComponent,
      },
      {
        path: 'user/detail/:id',
        component: UserDetailComponent,
      },
    ]),
  ],
  providers: [Test],
  exports: [UserListComponent],
})
export class UserModule {}
