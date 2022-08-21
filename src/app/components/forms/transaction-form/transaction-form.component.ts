import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';
import { emptyTransactionRecord, Transaction } from 'src/app/models';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: [
    './transaction-form.component.scss',

  ],
})
export class TransactionFormComponent implements OnInit {
  formSubmitting: boolean = false;
  transactionForm: FormGroup;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public clipboard: Clipboard
  ) {
    this.transactionForm = this.setupTransactionFormGroup();
  }

  setupTransactionFormGroup = (
    transactionFormRecord: Transaction = emptyTransactionRecord
  ): FormGroup => {
    return this.fb.group({
      id: [transactionFormRecord?.id],
      name: [transactionFormRecord?.name],
      amount: [transactionFormRecord?.amount]
    });
  };



  ngOnInit(): void {

  }


  goBack() {
    this.location.back();
  }


  submitForm(form: FormGroup, formDirective: FormGroupDirective) {
    this.formSubmitting = true;
  }
}