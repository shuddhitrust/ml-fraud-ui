import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { ContactService } from './contact.service';
import { NotificationService } from './../services/notification.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  private statusCode;
  private statusMessage;
  contactForm;
  formSubmitted;
  captchaResponse

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;


  constructor(private contactService: ContactService, private notificationService: NotificationService) {
    this.contactForm = this.newContactForm();
  }

  newContactForm = () => {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      content: new FormControl('', [Validators.required]),
      // recaptchaReactive: new FormControl(null, Validators.required)
    })
  }

  resetFormData = () => {
    this.formSubmitted = false;
    this.formGroupDirective.resetForm();
  }

  openSnackBar() {
    this.notificationService.openSnackBar(this.statusCode, this.statusMessage);
  }

  showError(label, validationCheck) {
    const field = this.contactForm.get(label);
    return field.invalid && (field.dirty || field.touched || this.formSubmitted) && field.errors[validationCheck]
  }

  showRecaptchaError() {
    return this.formSubmitted && !this.captchaResponse;
  }
  resolved(captchaResponse: string) {
    this.captchaResponse = captchaResponse;
  }
  handleSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.status == 'VALID' && this.captchaResponse) {
      this.contactService.sendMessage({ form: this.contactForm.value, captchaResponse: this.captchaResponse }).subscribe(response => {
        if (!response.ok) {
          this.statusMessage = "Message sending failed!";
          this.statusCode = false
        } else {
          window.scrollTo(0, 0)
          this.statusMessage = "Message sent successfully!";
          this.statusCode = true
          this.resetFormData();
        }
        this.openSnackBar();
      })
    } else {
      this.statusMessage = "Please fill in all fields and try again!";
      this.statusCode = false;
      this.openSnackBar();
    }
  }
  ngOnInit(): void {
  }

}
