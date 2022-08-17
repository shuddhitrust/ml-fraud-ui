import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-rules-component',
    templateUrl: './rules.component.html',
    styleUrls: ['./rules.component.scss'],
})

export class RulesComponent implements OnInit {
    columnDefs = [{field: 'title'}, {field: 'description'}, {field: 'weightage'}]
    rowData = [
        {title: 'Rule 1', description: 'Rule 1 description', weightage: 1 },
        {title: 'Rule 2', description: 'Rule 2 description', weightage: .5 },
        {title: 'Rule 3', description: 'Rule 3 description', weightage: .7 },
        {title: 'Rule 4', description: 'Rule 4 description', weightage: .2 },
    ]
    constructor(private router: Router) { }

    ngOnInit() { }
    
    goHome() {
        this.router.navigateByUrl('');
    }
}