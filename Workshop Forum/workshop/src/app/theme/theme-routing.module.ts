import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { MainComponent } from './../main/main.component';
import { NewThemeComponent } from './new-theme/new-theme.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';

const routes: Routes = [
  {
    path: 'themes',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent,
      },
      {
        path: ':themeId',
        component: CurrentThemeComponent,
      },
    ],
  },
  {
    path: 'new-theme',
    component: NewThemeComponent,
    // canActivate: [AuthActivate],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
