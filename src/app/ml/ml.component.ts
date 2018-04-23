import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, Params, PRIMARY_OUTLET, NavigationEnd } from '@angular/router';
import { ConfirmationModalComponent } from '../shared/confirmationmodal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.css']
})
export class MLComponent {

  title = 'Machine Learning';
  public breadcrumbs: IBreadcrumb[];
  @Input()
  opened: boolean
  constructor(private activatedRoute: ActivatedRoute, private router: Router,public dialog: MatDialog) {
    this.breadcrumbs = [];
    this.opened=true;
    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      //set breadcrumbs
      let root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
    });
  }

  confirmLogout(){
    let dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '20vw',
      maxWidth: '20vw',
      data: 'Are you sure want to logout?'
    });
    const sub = dialogRef.componentInstance.onYes.subscribe((data) => {
      this.router.navigateByUrl("/logout");
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  navigateToUrl(url:string)
  {
    this.router.navigateByUrl(url);
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string = "", breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

    //get the child routes
    let children: ActivatedRoute[] = route.children;

    //return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    //iterate over each children
    for (let child of children) {
      //verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      //verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      //get the route's URL segment
      let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");

      //append route URL to URL
      url += `/${routeURL}`;

      //add breadcrumb
      let breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url: url
      };
      breadcrumbs.push(breadcrumb);

      //recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
  }
}

interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
}