import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material';
import { AddeditprojectdialogComponent } from '../addeditprojectdialog/addeditprojectdialog.component';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../../_models/project';
import { Http } from '@angular/http';

@Component({
  selector: 'dl-addeditproject',
  template: ''
})
export class AddEditProjectComponent implements OnInit {
  dialogRef: MatDialogRef<AddeditprojectdialogComponent>;
  project: Project;
  private _id: number;
  config: MatDialogConfig = {
    disableClose: false,
    hasBackdrop: true,
    backdropClass: '',
    width: '32vw',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  };
  constructor(public dialog: MatDialog, @Inject(DOCUMENT) private doc: any,
    private route: ActivatedRoute, private router: Router, private http: Http) {
    let self = this;
    this.route.params.subscribe(params => {
      this._id = params["id"];
      if (this._id > 0) {
        this.http.get('assets/data/projectData.json')
          .toPromise().then(projects => {
            self.project = projects.json().filter(function (item) { return item.id == self._id })[0];
            this.config.data = self.project;
            dialog.afterOpen.subscribe(() => {
              if (!doc.body.classList.contains('no-scroll')) {
                doc.body.classList.add('no-scroll');
              }
            });
            this.openModal();
          })
      }
      else {
        alert("id does not found");
      }
    });
  }

  openModal() {
    this.dialogRef = this.dialog.open(AddeditprojectdialogComponent, this.config);

    this.dialogRef.afterClosed().subscribe((result: string) => {
      this.dialogRef = null;
      this.router.navigate(['myprojects']);
      this.doc.body.classList.remove('no-scroll');
    });
  }

  ngOnInit() {

  }

}
