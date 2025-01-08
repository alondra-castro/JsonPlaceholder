import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService, User } from '../services/user.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-users',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone:false,
})
export class UsersPage implements OnInit {
  users: User[] = [];
  isLoading = true;

  constructor(private userService: UserService, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.loadUsers();
  }

  // Cargar usuarios desde la API
  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar usuarios:', error);
        this.isLoading = false;
      },
    });
  }

  // Abrir el modal con los detalles del usuario
  async openUserDetails(user: User) {
    const modal = await this.modalCtrl.create({
      component: UserDetailsComponent,
      componentProps: { user },
    });
    await modal.present();
  }
}
