import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-rules-component',
    templateUrl: './rules.component.html',
    styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {
    constructor(private router: Router) { }
    ngOnInit() { }
    goHome() {
        this.router.navigateByUrl('');
    }
}