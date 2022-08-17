import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-transactions-component',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
    columnDefs = [{field: 'title'}, {field: 'amount'}]
    rowData = [
        {title: 'Transaction 1', amount: 1000 },
        {title: 'Transaction 2', amount: 1200 },
        {title: 'Transaction 3', amount: 500 },
        {title: 'Transaction 4', amount: 70 },
    ]
    constructor(private router: Router) { }

    ngOnInit() { }
    
    goHome() {
        this.router.navigateByUrl('');
    }
}