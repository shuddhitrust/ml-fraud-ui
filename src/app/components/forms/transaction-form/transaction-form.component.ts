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
import { emptyTransactionRecord, MatSelectOption, Transaction } from 'src/app/models';
import { attributeOptions, getRandomFraudTransaction, getRandomNonFraudTransaction } from 'src/app/constants';
import { ApiService } from 'src/app/api/api.service';

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
  attributeOptions: MatSelectOption[] = attributeOptions.filter(attribute => {
      return attribute.value != 'fraud'
    })
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public clipboard: Clipboard,
    private apiService: ApiService
  ) {
    this.transactionForm = this.setupTransactionFormGroup();
  }

  setupTransactionFormGroup = (
    transactionFormRecord: any = emptyTransactionRecord
  ): FormGroup => {
    let group: any = {};

    this.attributeOptions.forEach((attribute: MatSelectOption) => {
      const field = attribute?.value;
      group[field] = transactionFormRecord[field]
    })

    console.log('Group just before form setup',{group})

    return this.fb.group(group);
  };

  populateFraudTransaction = () => {
    this.transactionForm = this.setupTransactionFormGroup(getRandomFraudTransaction())
  }

  populateNonFraudTransaction = () => {
    this.transactionForm = this.setupTransactionFormGroup(getRandomNonFraudTransaction())
  }

  ngOnInit(): void {

  }


  goBack() {
    this.location.back();
  }


  submitForm(form: FormGroup, formDirective: FormGroupDirective) {
    this.formSubmitting = true;
    console.log("Submitting transaction => ", form.value)
    this.apiService.submitTransaction(form.value)
  }
}