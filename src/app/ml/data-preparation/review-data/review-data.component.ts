import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TableData } from '../../../_models/tabledata';
// tslint:disable-next-line:import-blacklist
import { Subject } from 'rxjs';
import { MatDialog, MatStepper } from '@angular/material';
import { SalesInfoComponent } from './sales-info/sales-info.component';
import { LocalStorageService } from '../../../_services/localstorageservice.component';
import { Router } from '@angular/router';
import { DPSharedService } from '../data.preparation.shared';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'review-data',
  templateUrl: './review-data.component.html',
  styleUrls: ['./review-data.component.css']
})
export class ReviewDataComponent implements OnInit {
  @ViewChild('tblReviewData')
  private tblReviewData: DataTables.DataTables;
  dtOptions: DataTables.Settings = {};
  tableData: TableData[] = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private http: Http, public dialog: MatDialog, private _service: DPSharedService,
    private _local: LocalStorageService, private _router: Router) { }

  ngOnInit() {
    this.dtOptions = {
      pageLength: 5
    };
    this.http.get('assets/data/tableData.json')
      .map(this.extractData)
      .subscribe(tData => {
        this.tableData = tData;
        this._local.setItem('reviewdata', JSON.stringify(tData));
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }
  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  showSalesInfo(ver: number) {
    const salesRec = this.tableData.filter(function (item) {
      return item.var === ver;
    })[0];
    const dialogRef = this.dialog.open(SalesInfoComponent, {
      width: '500px',
      data: salesRec
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  moveNext() {
    this._service.emitChange('cdata');
  }
}
