import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-transactions-component',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
    constructor(private router: Router) { }
    ngOnInit() { }
    goHome() {
        this.router.navigateByUrl('');
    }
}