import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {


  showMenu = true;
  email: string;
  password: string;

  constructor(private router: Router) {
    // Detectar cambios en la ruta
    this.router.events.subscribe(() => {
      this.showMenu = !this.router.url.includes('/login'); // Oculta el menú en la página de Login
    });
    this.email = 'test@example.com';
    this.password = 'admin';
  }

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
  }
}
