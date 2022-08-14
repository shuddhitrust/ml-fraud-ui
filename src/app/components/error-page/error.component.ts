import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-error-component',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css'],
})
export class ErrorPageComponent implements OnInit {
    constructor(private router: Router) { }
    ngOnInit() { }
    goHome() {
        this.router.navigateByUrl('');
    }
}