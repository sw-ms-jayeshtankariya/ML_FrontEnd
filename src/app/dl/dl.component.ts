import { Component, Input, Renderer } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dl',
    templateUrl: './dl.component.html',
    styleUrls: ['./dl.component.css']
})
export class DLComponent {
    @Input()
    opened: boolean;

    selectedItem = '';
    constructor(private render: Renderer) {
        this.opened = true;
    }

    setSelected(e) {
        this.selectedItem = e.target.id;
    }
}
