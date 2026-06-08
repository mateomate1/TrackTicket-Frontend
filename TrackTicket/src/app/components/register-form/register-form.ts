import { Component, inject, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '@services/auth';

@Component({
  selector: 'app-register-form',
  imports: [FormsModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
})
export class RegisterForm {

  private auth = inject(Auth);
  registroExitoso = output<void>();

  userName = signal('');
  email = signal('');
  password = signal('');
  error = signal('');
  loading = signal(false);

  async onSubmit(): Promise<void> {
    if (!this.userName() || !this.email() || !this.password()) {
      this.error.set('Rellena todos los campos');
      return;
    }

    this.loading.set(true);
    this.error.set('');

    try {
      await this.auth.register(this.userName(), this.email(), this.password());
      this.registroExitoso.emit();
    } catch (e) {
      this.error.set('Error al registrar. Inténtalo de nuevo.');
    } finally {
      this.loading.set(false);
    }
  }
}