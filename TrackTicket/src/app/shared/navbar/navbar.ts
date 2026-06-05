import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '@services/user';
import { Auth } from '@services/auth';
import { NotificationsService } from '@services/notifications/notifications-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit{
  user = inject(User);
  notificationService = inject(NotificationsService)
  private auth = inject(Auth);
  private router = inject(Router);

  ngOnInit(): void {
    this.notificationService.hasUnreadNotifications();
  }

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