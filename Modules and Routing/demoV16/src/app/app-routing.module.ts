// import { UserDetailComponent } from './user/detail/detail.component';
// import { Component } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
import { PostListComponent } from './post/list/list.component';
// import { UserListComponent } from './user/list/list.component';
// import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/user/list',
  },

  {
    path: 'post-list',
    component: PostListComponent,
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes); // shorter version, does the same as below but below can be customizable
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
