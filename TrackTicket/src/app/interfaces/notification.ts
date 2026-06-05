import { NotificationType } from "./notification.enum";

export interface Notification {
    idNotification: number;
    message: string;
    type: NotificationType;
    read: boolean;
    launch: string;
}
