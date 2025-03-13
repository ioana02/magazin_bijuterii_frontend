import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { CommonModule } from '@angular/common'; // ✅ Importă CommonModule

@Component({
  selector: 'app-login',
  templateUrl: './login-components.html',
  standalone: true,
  styleUrls: ['./login-components.css'],
  imports: [FormsModule, CommonModule] // ✅ Importă FormsModule aici!
})
export class LoginComponent {
    username: string = '';
    password: string = '';
    loginError: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      console.log('Login reușit');
    } else {
      this.loginError = 'Username sau parolă incorectă';
    }
  }
}