import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@services/user';
import { Auth } from '@services/auth';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  user = inject(User);
  private auth = inject(Auth);
  private router = inject(Router);

  goToAuth(): void {
    this.router.navigate(['/auth']);
  }

  async logout(): Promise<void> {
    await this.auth.logout();
  }

  async deleteAccount(): Promise<void> {
    await this.auth.deleteAccount();
  }
}