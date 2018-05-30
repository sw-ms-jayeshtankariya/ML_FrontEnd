import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Router, ActivatedRoute, UrlHandlingStrategy, Params } from '@angular/router';

@Component({
  selector: 'app-configure-project',
  templateUrl: './configure-project.component.html',
  styleUrls: ['./configure-project.component.css']
})
export class ConfigureProjectComponent implements OnInit, AfterViewInit {
  @ViewChild('projectconfig') private myStepper: MatStepper;

  projectId = 0;
  ngAfterViewInit(): void {
    if (this.route.children.length > 0) {
      if (this.route.children.filter(function (item) { return item.outlet === 'ftpconfig'; }).length > 0) {
        this.myStepper.next();
      }
      if (this.route.children.filter(function (item) { return item.outlet === 'datareview'; }).length > 0) {
        this.myStepper.next();
      }
      if (this.route.children.filter(function (item) { return item.outlet === 'modeldesign'; }).length > 0) {
        this.myStepper.next();
      }
      if (this.route.children.filter(function (item) { return item.outlet === 'hyperparam'; }).length > 0) {
        this.myStepper.next();
      }
      if (this.route.children.filter(function (item) { return item.outlet === 'training'; }).length > 0) {
        this.myStepper.next();
      }
      this.cdRef.detectChanges();
    }
  }

  constructor(private _router: Router, private route: ActivatedRoute, private cdRef: ChangeDetectorRef) {
    // tslint:disable-next-line:prefer-const
    let self = this;
    this.route.params.subscribe((params: Params) => {
      self.projectId = params['id'];
    });
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
          this._router.navigate(['/dl/configure-project/' + this.projectId, { outlets: { 'ftpconfig': ['ftp-config'] } }]);
        }
        break;
      case 1:
        if (this.route.children.filter(function (item) { return item.outlet === 'datareview'; }).length === 0) {
          this._router.navigate(['/dl/configure-project/' + this.projectId, { outlets: { 'datareview': ['data-review'] } }]);
        }
        break;
      case 2:
        if (this.route.children.filter(function (item) { return item.outlet === 'modeldesign'; }).length === 0) {
          this._router.navigate(['/dl/configure-project/' + this.projectId, { outlets: { 'modeldesign': ['model-design'] } }]);
        }
        break;
      case 3:
        if (this.route.children.filter(function (item) { return item.outlet === 'hyperparam'; }).length === 0) {
          this._router.navigate(['/dl/configure-project/' + this.projectId, { outlets: { 'hyperparam': ['hyper-param'] } }]);
        }
        break;
      case 4:
        if (this.route.children.filter(function (item) { return item.outlet === 'training'; }).length === 0) {
          this._router.navigate(['/dl/configure-project/' + this.projectId, { outlets: { 'training': ['ting'] } }]);
        }
        break;
      case 5:
        if (this.route.children.filter(function (item) { return item.outlet === 'results'; }).length === 0) {
          this._router.navigate(['/dl/configure-project/' + this.projectId, { outlets: { 'results': ['rsults'] } }]);
        }
        break;
    }
    this.myStepper.next();
  }
}
