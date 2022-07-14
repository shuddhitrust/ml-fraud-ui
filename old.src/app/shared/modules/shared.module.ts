import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Styling } from 'src/app/styling.imports';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleLoadingSpinnerComponent } from '../components/loading/simple-spinner/simple-loading-spinner.component';
import { NgxsModule } from '@ngxs/store';
import { OptionsState } from '../state/options/options.state';
import { NotificationState } from '../state/notifications/notification.state';
import { LoadingState } from '../state/loading/loading.state';
import { SubscriptionsState } from '../state/subscriptions/subscriptions.state';

const imports = [CommonModule, FormsModule, ReactiveFormsModule, Styling];

const declarations = [SimpleLoadingSpinnerComponent];

@NgModule({
  declarations,
  imports: [
    ...imports,
    NgxsModule.forFeature([OptionsState, NotificationState, LoadingState]),
  ],
  exports: [...imports, ...declarations],
})
export class SharedModule {}
