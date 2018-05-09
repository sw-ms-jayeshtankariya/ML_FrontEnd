import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { LocalStorageService } from '../../../_services/localstorageservice.component';
import { TableData } from '../../../_models/tabledata';
// tslint:disable-next-line:import-blacklist
import { Subject } from 'rxjs';
import { DPSharedService } from '../data.preparation.shared';

@Component({
  // tslint:disable-next-line:component-selector
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
  constructor(private _local: LocalStorageService, private _service: DPSharedService) { }
  @Input()
  opened = false;

  ngOnInit() {
    this.dtCleanOpt = {
      pageLength: 5
    };
    this.tableData = JSON.parse(this._local.getItem('reviewdata'));
    this.dtCleanTrg.next();
  }

  moveNext() {
    this._local.setItem('cleandata', JSON.stringify(this.tableData));
    this._service.emitChange('pdata');
  }
}
