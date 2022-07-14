import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LoginModalComponent } from '../auth/components/login/login-modal.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { MasterConfirmationDialog } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { ImageDisplayDialog } from 'src/app/shared/components/image-display/image-display-dialog.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AdminModule } from './modules/admin/admin.module';
import { DashboardState } from './state/dashboard.state';
import { NgxsModule } from '@ngxs/store';
// import { ChatModule } from './modules/chat/chat.module';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginModalComponent,
    MasterConfirmationDialog,
    ImageDisplayDialog,
  ],
  imports: [
    SharedModule,
    HotToastModule.forRoot(),
    NgxsModule.forFeature([DashboardState]),
    AdminModule,
    // ChatModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
