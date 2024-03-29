import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormGroupDirective,
  FormArray,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { emptyRuleItem, emptyRuleRecord, emptyTransactionRecord, MatSelectOption, Rule, RuleItem, Transaction } from 'src/app/models';
import { arithmeticOperatorOptions, attributeTypeOptions, attributeOptions, comparativeOperatorOptions, logicalOperatorOptions, operatorTypeOptions } from 'src/app/constants';
import { ApiService } from 'src/app/api/api.service';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-autogenerated-rule-form',
  templateUrl: './autogenerated-rule-form.component.html',
  styleUrls: [
    './autogenerated-rule-form.component.scss',

  ],
})
export class AutogeneratedRuleFormComponent implements OnInit {
  formSubmitting: boolean = false;
  formLoading: boolean = true;
  ruleForm: FormGroup;
  attributeTypeOptions: MatSelectOption[] = attributeTypeOptions
  operatorTypeOptions: MatSelectOption[] = operatorTypeOptions
  attributeOptions: MatSelectOption[] = attributeOptions
  arithmeticOperatorOptions: MatSelectOption[] = arithmeticOperatorOptions
  comparativeOperatorOptions: MatSelectOption[] = comparativeOperatorOptions
  logicalOperatorOptions: MatSelectOption[] = logicalOperatorOptions

  constructor(
    private location: Location,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    this.ruleForm = this.setupRuleFormGroup();
    this.addRuleItem();
    
  }

  ngOnInit(): void {
    // Dynamically change params use below code...
    this.route.queryParams.subscribe((param : Params) => {
      console.log('params => ', {param})
        const id = param['id'];
        if(id?.length) {
          console.log('ID => ', {id})
          this.formLoading = true;
          this.apiService.getRule(id).subscribe(rule => {
            if(rule) {
              this.setupRuleFormGroup(rule)
            }
          })
        } else {
          this.ruleForm = this.setupRuleFormGroup();
        }
        this.addRuleItem();
    });
}  

  setupRuleFormGroup = (
    ruleFormRecord: Rule = emptyRuleRecord
  ): FormGroup => {
    let form = this.fb.group({
      id: [ruleFormRecord?.id],
      title: [ruleFormRecord?.title, Validators.required],
      description: [ruleFormRecord?.description, Validators.required],
      rule: this.fb.array([]),
      weight: [ruleFormRecord?.weight,Validators.required],
      autogenerated: [ruleFormRecord?.autogenerated],
      active: [ruleFormRecord?.active]
    });
    this.formLoading = false;
    return form
  };

  getRule():FormArray {
    return this.ruleForm.get('rule') as FormArray
  }

  addRuleItem() {
    this.getRule().push(this.fb.group(emptyRuleItem()))
  }

  removeRuleItem(index: number) {
    this.getRule().removeAt(index)
  }


  
  getAttributeTypeForIndex(index: number):string {
    return this.getRule().at(index).get('type')?.value
  }

  getValueForIndex(index: number): string | number {
    return this.getRule().at(index).get('value')?.value
  }


  goBack() {
    this.location.back();
  }


  submitForm(form: FormGroup, formDirective: FormGroupDirective) {
    console.log('Submitting rule => ', form.value)
    if(form.valid) {
      this.formSubmitting = true;
      this.apiService.submitRule(form.value);
    }
  }
}