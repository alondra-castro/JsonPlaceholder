import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    component: UsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
