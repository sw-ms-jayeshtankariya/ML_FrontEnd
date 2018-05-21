import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { slideInOutAnimation } from '../../_animations/slide-in-out.animations';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'choose-module',
    templateUrl: './choose.module.html',
    styleUrls: ['./choose.module.css']
})
export class ChooseModuleComponent implements OnInit {
    ngOnInit(): void {

    }
    constructor(private titleService: Title, private _router: Router) {
        this.setTitle('Choose Functions');
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    chooseModule(tag: string) {
        if (tag === 'dl') {
            this._router.navigateByUrl('/dl/myprojects');
        } else {
            this._router.navigateByUrl('/ml/datapreparation');
        }
    }
}
