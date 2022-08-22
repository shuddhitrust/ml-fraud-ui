import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { attributeOptions } from 'src/app/constants';
import { Transaction } from 'src/app/models';

@Component({
    selector: 'app-transactions-component',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
    transactions: Transaction[] = [];
    defaultColDef = {
        resizable: true,
    }
    columnDefs = attributeOptions.map(attribute => {
        return {field: attribute.value, headerName: attribute.label}
    })
    constructor(private router: Router, private apiService: ApiService) {
        this.getTransactions();
     }

    ngOnInit() { }

    getTransactions(): void {
        this.apiService.getTransactions()
        .subscribe(transactions => {
            this.transactions = transactions
            console.log({transactions})
        });
    }



    
    goHome() {
        this.router.navigateByUrl('');
    }
}