
import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';


@Component({
    selector: 'app-button-renderer',
    templateUrl: './button-renderer.component.html',
    styleUrls: ['./button-renderer.component.scss'],
})
export class ButtonRendererComponent implements ICellRendererAngularComp {
    params: any;
    refresh: any;

    constructor() {}

    agInit(params: any): void {
        this.params = params;
      }
    
      btnClickedHandler($event: any) {
        this.params.clicked(this.params);
      }
}