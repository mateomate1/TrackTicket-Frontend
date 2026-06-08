import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Notification } from '@interfaces/notification';
import { NotificationType } from '@interfaces/notification.enum';
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

  getNotificationConfig(type: NotificationType) {
    switch (type) {
      case NotificationType.NEW_CONCERT:
        return {
          borderClass: 'border-green-500',
          textClass: 'text-green-600',
          label: 'Nuevo concierto'
        };

      case NotificationType.MODIFIED_CONCERT:
        return {
          borderClass: 'border-yellow-500',
          textClass: 'text-yellow-600',
          label: 'Concierto modificado'
        };

      case NotificationType.CANCELLED_CONCERT:
        return {
          borderClass: 'border-red-500',
          textClass: 'text-red-600',
          label: 'Concierto cancelado'
        };

      default:
        return {
          borderClass: 'border-blue-500',
          textClass: 'text-blue-600',
          label: 'Próximo concierto'
        };
    }
  }
  markAsRead(notification: Notification): void {
    this.notificationService.readNotification(notification.idNotification);
  }
  deleteNotification(notification: Notification): void {
    this.notificationService.deleteNotification(notification.idNotification);
  }
}
