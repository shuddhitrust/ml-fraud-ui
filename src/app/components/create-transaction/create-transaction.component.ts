import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-transaction-component',
    templateUrl: './create-transaction.component.html',
    styleUrls: ['./create-transaction.component.css'],
})
export class CreateTransactionsComponent implements OnInit {
    constructor(private router: Router) { }
    ngOnInit() { }
    goHome() {
        this.router.navigateByUrl('');
    }
}