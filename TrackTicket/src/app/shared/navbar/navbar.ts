import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '@services/user';
import { Auth } from '@services/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  user = inject(User);
  private auth = inject(Auth);
  private router = inject(Router);

  showUserMenu = false;

  goToAuth(): void {
    this.router.navigate(['/auth']);
  }

  async logout(): Promise<void> {
    await this.auth.logout();
  }

  async confirmDeleteAccount() {
    const result = await Swal.fire({
      title: 'Borrar cuenta',
      text: 'Esta accion no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      await this.deleteAccount();
    }
  }

  async deleteAccount(): Promise<void> {
    await this.auth.deleteAccount();
  }
}
