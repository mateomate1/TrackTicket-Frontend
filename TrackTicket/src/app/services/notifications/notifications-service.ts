import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Notification } from '@interfaces/notification';
import { enviroment } from '@shared/environmentAPI';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private http = inject(HttpClient);
  private token = localStorage.getItem('token');

  notifications = signal<Notification[]>([]);
  hasUnreadNotifications = signal(false);

  loadUnreadCount(): void{
    this.http.post<number>(`${enviroment.root}/v1/notifications/unread-count`,
      {
        'token': this.token
      }
     ).subscribe({
        next: (count) => {
          this.hasUnreadNotifications.set(count>0);
        },
        error: (err) => {
          console.error(`Fail in POST request at ${enviroment.root}/v1/notifications/unread-count: ${err}`);
        }
     })
  }

  loadNotifications(): void{
    this.http.post<Notification[]>(`${enviroment.root}/v1/notifications/list`,
      {
        'token': this.token
      }
     ).subscribe({
        next: (response) => {
          this.notifications.set(response);
        },
        error: (err) => {
          console.error(`Fail in POST request at ${enviroment.root}/v1/notifications/list: ${err}`);
        }
     })
  }

  readNotification(notificationId: number): void{
    this.http.post<void>(`${enviroment.root}/v1/notifications/read`,
      {
        'token': this.token,
        'idNotification': notificationId
      }
    ).subscribe({
      next: () => {
        this.loadNotifications();
      },
      error: (err) => {
        console.error("Fail trying to read notification: " + err);
        
      }
    })
    this.loadNotifications();
  }

  deleteNotification(notificationId: number): void{
    this.http.post<void>(`${enviroment.root}/v1/notifications/delete`,
      {
        'token': this.token,
        'idNotification': notificationId
      }
    ).subscribe({
      next: () => {
        this.loadNotifications();
      },
      error: (err) => {
        console.error("Fail trying to delete notification: " + err);
        
      }
    })
    
  }


}
