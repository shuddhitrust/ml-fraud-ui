import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-rule-component',
    templateUrl: './create-rule.component.html',
    styleUrls: ['./create-rule.component.css'],
})
export class CreateRuleComponent implements OnInit {
    constructor(private router: Router) { }
    ngOnInit() { }
    goHome() {
        this.router.navigateByUrl('');
    }
}