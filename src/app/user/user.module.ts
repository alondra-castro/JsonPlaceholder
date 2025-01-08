

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserPageRoutingModule } from './user-routing.module';
import { UsersPage } from './user.page';
import { UserDetailsComponent } from '../user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    UserPageRoutingModule,
  ],
  declarations: [UsersPage, UserDetailsComponent],
})
export class UsersPageModule {}
