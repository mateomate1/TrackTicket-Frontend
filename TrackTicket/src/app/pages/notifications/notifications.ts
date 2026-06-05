import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NotificationsService } from '@services/notifications/notifications-service';

@Component({
  selector: 'app-notifications',
  imports: [CommonModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications implements OnInit{
  notificationService = inject(NotificationsService)

  ngOnInit(): void {
    this.notificationService.loadNotifications();
  }
}
