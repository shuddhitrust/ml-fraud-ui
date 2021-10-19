import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ContactModule } from '../contact.module';

const successNotificationClass = 'notification-success';
const failureNotificationClass = 'notification-failure';

@Injectable({ providedIn: 'root' })
export class NotificationService {
    private notificationClass;

    constructor(private _snackBar: MatSnackBar) {
        this.initiateNotificationVariables();
    }

    initiateNotificationVariables = () => {
        this.notificationClass = "";
    }

    openSnackBar(success: boolean, message: string) {
        if (success) {
            this.notificationClass = successNotificationClass;
        } else {
            this.notificationClass = failureNotificationClass;
        }
        const config = new MatSnackBarConfig();
        config.panelClass = this.notificationClass;
        this._snackBar.open(message, "Ok", {
            ...config,
            duration: 3000,
        });
        this.initiateNotificationVariables();
    }

}
