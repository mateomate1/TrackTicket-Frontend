import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '@services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {

  private auth = inject(Auth);
  private router = inject(Router);

  userName = signal('');
  password = signal('');
  error = signal('');
  loading = signal(false);

  async onSubmit(): Promise<void> {
    if (!this.userName() || !this.password()) {
      this.error.set('Rellena todos los campos');
      return;
    }

    this.loading.set(true);
    this.error.set('');

    try {
      await this.auth.login(this.userName(), this.password());
      this.router.navigate(['/search']);
    } catch (e) {
      this.error.set('Usuario o contraseña incorrectos');
    } finally {
      this.loading.set(false);
    }
  }
}