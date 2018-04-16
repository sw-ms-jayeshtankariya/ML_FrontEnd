import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { slideInOutAnimation } from '../app/_animations/slide-in-out.animations';
@Component({
  selector: 'login',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': ''}
})
export class ForgetPasswordComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(private titleService: Title,private _router:Router) {
    this.setTitle("Forget Password");
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  doForgetPassword(e: Event) {
    e.preventDefault();
    this._router.navigateByUrl("/signin");
  }
}
