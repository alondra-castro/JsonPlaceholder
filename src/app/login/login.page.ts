

import { Component } from '@angular/core';


import { Router } from '@angular/router'; // Importar Router
import { NavController } from '@ionic/angular'; // Importar NavController como alternativa

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],standalone:false,
})
export class LoginPage {
  email: string;
  password: string;

  constructor(
    private router: Router,
    private navCtrl: NavController // Inyectar NavController
  ) {
    this.email = 'test@example.com';
    this.password = 'admin';
  }

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    
    // Opción 1: Usando Router
    this.router.navigate(['user']);
    
    // Opción 2: Usando NavController (alternativa recomendada para Ionic)
    this.navCtrl.navigateForward('user');
  }
}

