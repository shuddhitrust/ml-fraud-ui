import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { colDef, emptyRuleRecord, Rule } from 'src/app/models';

@Component({
    selector: 'app-rules-component',
    templateUrl: './rules.component.html',
    styleUrls: ['./rules.component.scss'],
})

export class RulesComponent implements OnInit {
    columnDefs: colDef[] = []
    defaultColDef = {resizable: true}
    rules: Rule[] = []
    constructor(private router: Router, private apiService: ApiService) {
        this.columnDefs = this.generateRuleColumnDefs();
     }

    ngOnInit() { }

    generateRuleColumnDefs = (): colDef[] => {
        return Object.keys(emptyRuleRecord).map(key => {
            return {field: key}
        })
    }
    
    getRules(): void {
        this.apiService.getRules()
        .subscribe(rules => {
            this.rules = rules
            console.log({rules})
        });
    }
    goHome() {
        this.router.navigateByUrl('');
    }
}