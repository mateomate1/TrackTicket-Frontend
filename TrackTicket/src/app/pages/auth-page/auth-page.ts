import { Component, signal } from '@angular/core';
import { LoginForm } from '../../components/login-form/login-form';
import { RegisterForm } from '../../components/register-form/register-form';

@Component({
  selector: 'app-auth-page',
  imports: [LoginForm, RegisterForm],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css',
})

export class AuthPage {
  showLogin = signal(true);

  toggleForm(): void {
    this.showLogin.update(value => !value);
  }


}
