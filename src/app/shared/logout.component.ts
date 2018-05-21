import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: ''
})

export class LogoutComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
        // write down logout related code here
        this.router.navigate(['/registration/login']);
    }
}
