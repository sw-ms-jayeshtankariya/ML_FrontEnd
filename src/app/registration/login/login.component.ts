import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { slideInOutAnimation } from '../../_animations/slide-in-out.animations';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(private titleService: Title,private _router:Router) {
    this.setTitle("Login Here");
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  doLogin(e: Event) {
    e.preventDefault();
    this._router.navigateByUrl("/registration/choosemodule");
  } 
}
