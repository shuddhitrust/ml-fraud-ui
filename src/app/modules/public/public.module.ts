import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/modules/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { NgxsModule } from '@ngxs/store';
import { PublicState } from './state/public/public.state';
import { PublicComponent } from './components/public/public.component';
import { AuthModule } from '../auth/auth.module';
import { ErrorPageComponent } from './components/pages/error/error.component';
import { PublicTabsComponent } from './components/feed/public-lists.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PasswordResetComponent } from './components/pages/password-reset/password-reset.component';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';

const declarations = [
  HomeComponent,
  PasswordResetComponent,
  PrivacyComponent,
  PublicComponent,
  ErrorPageComponent,
  PublicTabsComponent,
];

@NgModule({
  declarations,
  exports: [...declarations],
  imports: [
    SharedModule,
    AuthModule,
    PublicRoutingModule,
    NgxsModule.forFeature([PublicState]),
  ],
})
export class PublicModule {}
