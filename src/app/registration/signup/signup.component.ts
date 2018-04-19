import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { slideInOutAnimation } from '../../_animations/slide-in-out.animations';
@Component({
  selector: 'login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class SignUpComponent implements OnInit {
  constructor(private titleService: Title,private _router:Router) {
    this.setTitle("Sign Up");
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit(): void {

  }
  doSignUp(e: Event) {
    e.preventDefault();
    this._router.navigateByUrl("/home/datapreparation");
  }
}
