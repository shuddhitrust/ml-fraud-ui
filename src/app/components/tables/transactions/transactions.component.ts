import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
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
    columnDefs = [{field: 'title'}, {field: 'amount'}]
    constructor(private router: Router, private apiService: ApiService) {
        this.getTransactions();
        this.getColumns();
     }

    ngOnInit() { }

    getTransactions(): void {
        this.apiService.getTransactions()
        .subscribe(transactions => {
            this.transactions = transactions
            console.log({transactions})
        });
    }

    generatecolumnDefs(attributes:string[] = []) {
        this.columnDefs = attributes.map(header => {
            return {field: header}
        })
    }

    getColumns(): void {
        this.apiService.getAttributes()
        .subscribe(attributes => {
            this.generatecolumnDefs(attributes)
            console.log({attributes})
        });
    }
    
    goHome() {
        this.router.navigateByUrl('');
    }
}