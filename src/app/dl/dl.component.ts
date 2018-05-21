import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dl',
    templateUrl: './dl.component.html',
    styleUrls: ['./dl.component.css']
})
export class DLComponent {
    @Input()
    opened: boolean;

    constructor() {
        this.opened = true;
    }
}
