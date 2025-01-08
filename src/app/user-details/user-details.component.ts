

import { Component, Input } from '@angular/core';
import { User } from '../services/user.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  standalone:false,
})
export class UserDetailsComponent {
  @Input() user!: User; // Usuario seleccionado que se pasa como prop
  constructor(private modalCtrl: ModalController) {}

  // Método para cerrar el modal
  dismiss() {
    this.modalCtrl.dismiss();
  }
}
