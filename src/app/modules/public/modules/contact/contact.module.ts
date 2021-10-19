import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { Styling } from './../../../../styling.imports';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact.routing';
import { CommonModule } from '@angular/common';
import {
  RECAPTCHA_SETTINGS,
  RecaptchaModule,
  RecaptchaSettings,
} from 'ng-recaptcha';
import { environment } from 'src/environments/environment';

const globalSettings: RecaptchaSettings = {
  siteKey: environment.recaptcha_site_key,
};

@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    RecaptchaModule,
    FormsModule,
    ReactiveFormsModule,
    Styling,
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: globalSettings,
    },
  ],
  bootstrap: [ContactComponent],
})
export class ContactModule {}
