import { Component, Input } from "@angular/core";

@Component({
    selector: 'dl',
    templateUrl: './dl.component.html',
    styleUrls: ['./dl.component.css']
})
export class DLComponent {
    @Input()
    opened: boolean

    constructor(){
        this.opened=true;
    }
}