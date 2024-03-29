import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sample } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';
import { paths } from 'src/app/app-routing.module';
import { colDef, emptyRuleRecord, Rule } from 'src/app/models';
import { ButtonRendererComponent } from '../../common/cell-renderers/button-renderer/button-renderer.component';

const sampleRules:Rule[] = [{
    id: 1,
    title: "Rule 1",
    description: "Sample Rule",
    rule: [
        {
            type: "attribute",
            value: "response_trx_acquirer"
        },
        {
            type: "comparative",
            value: "=="
        },
        {
            type: "value",
            value: "CMR_CL"
        }
    ],
    weight: 0.8,
    autogenerated: false,
    active: true
},{
    id: 2,
    title: "Rule 2",
    description: "Sample Rule",
    rule: [
        {
            type: "attribute",
            value: "response_trx_acquirer"
        },
        {
            type: "comparative",
            value: "=="
        },
        {
            type: "value",
            value: "CMR_CL"
        }
    ],
    weight: 0.7,
    autogenerated: false,
    active: true
}]

@Component({
    selector: 'app-autogenerated-rules-component',
    templateUrl: './autogenerated-rules.component.html',
    styleUrls: ['./autogenerated-rules.component.scss'],
})

export class AutogeneratedRulesComponent implements OnInit {
    columnDefs: colDef[] = []
    defaultColDef = {resizable: true}
    rules: Rule[] = sampleRules;
    constructor(private router: Router, private apiService: ApiService) {
        this.columnDefs = this.generateRuleColumnDefs();
     }

    ngOnInit() { }

    generateRuleColumnDefs = (): colDef[] => {
        let columns = Object.keys(emptyRuleRecord).map(key => {
            return {field: key}
        })
        const editButton: colDef =       {
            field: 'review',
            cellRenderer: ButtonRendererComponent,
            cellRendererParams: {
              buttonLabel: 'Review',
              clicked: (params:any) => {
                console.log('Review button was clicked',{params})
                this.router.navigate([paths.autogeneratedRuleForm], {queryParams: {id: params.data.id}});
              }
            },
          }
        return [editButton].concat(columns)
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