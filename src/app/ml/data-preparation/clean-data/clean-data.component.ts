import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalStorageService } from '../../../_services/localstorageservice.component';
import { TableData } from '../../../_models/tabledata';
import { Subject } from 'rxjs';

@Component({
  selector: 'clean-data',
  templateUrl: './clean-data.component.html',
  styleUrls: ['./clean-data.component.css']
})
export class CleanDataComponent implements OnInit {
  @ViewChild('tblCleanData')
  private tblCleanData: DataTables.DataTables;
  dtCleanOpt: DataTables.Settings = {};
  tableData: TableData[] = [];
  dtCleanTrg: Subject<any> = new Subject();
  constructor(private _local: LocalStorageService) { }

  ngOnInit() {
    this.dtCleanOpt = {
      pageLength: 5
    };
    this.tableData = JSON.parse(this._local.getItem("reviewdata"));
    this.dtCleanTrg.next();
  }

}
