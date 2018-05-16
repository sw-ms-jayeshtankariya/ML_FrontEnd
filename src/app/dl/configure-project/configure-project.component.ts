import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-configure-project',
  templateUrl: './configure-project.component.html',
  styleUrls: ['./configure-project.component.css']
})
export class ConfigureProjectComponent implements OnInit {
  @ViewChild('projectconfig') private myStepper: MatStepper;
  constructor(private _router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }
  // tslint:disable-next-line:member-ordering
  _url = '';

  get URL() {
    if (this._url === '') {
      this._url = this._router.url;
    }
    return this._url;
  }

  moveNext() {
    switch (this.myStepper.selectedIndex) {
      case 0:
        if (this.route.children.filter(function (item) { return item.outlet === 'ftpconfig'; }).length === 0) {
          this._router.navigate([this.URL, { outlets: { 'ftpconfig': ['ftp-config'] } }]);
        }
        break;
      case 1:
        if (this.route.children.filter(function (item) { return item.outlet === 'ftpconfig'; }).length === 0) {
          this._router.navigate([this.URL, { outlets: { 'datareview': ['data-review'] } }]);
        }
        break;
      case 2:
        if (this.route.children.filter(function (item) { return item.outlet === 'ftpconfig'; }).length === 0) {
          this._router.navigate([this.URL, { outlets: { 'modeldesign': ['model-design'] } }]);
        }
        break;
      case 3:
        if (this.route.children.filter(function (item) { return item.outlet === 'ftpconfig'; }).length === 0) {
          this._router.navigate([this.URL, { outlets: { 'hyperparam': ['hyper-param'] } }]);
        }
        break;
      case 4:
        if (this.route.children.filter(function (item) { return item.outlet === 'ftpconfig'; }).length === 0) {
          this._router.navigate([this.URL, { outlets: { 'training': ['ting'] } }]);
        }
        break;
      case 5:
        if (this.route.children.filter(function (item) { return item.outlet === 'ftpconfig'; }).length === 0) {
          this._router.navigate([this.URL, { outlets: { 'results': ['rsults'] } }]);
        }
        break;
    }
    this.myStepper.next();
  }
}
