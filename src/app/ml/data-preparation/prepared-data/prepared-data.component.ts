import { Component, OnInit } from '@angular/core';
import { TableData } from '../../../_models/tabledata';
import { LocalStorageService } from '../../../_services/localstorageservice.component';
// tslint:disable-next-line:import-blacklist
import { Subject } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'prepared-data',
  templateUrl: './prepared-data.component.html',
  styleUrls: ['./prepared-data.component.css']
})
export class PreparedDataComponent implements OnInit {

  tableData: TableData[] = [];
  dtCleanTrg: Subject<any> = new Subject();

  constructor(private _local: LocalStorageService) { }

  ngOnInit() {
    this.tableData = JSON.parse(this._local.getItem('reviewdata'));
    this.dtCleanTrg.next();
    console.log('prepared data');
  }
  componentActivated() {
    alert('Prepared Data Activated');
  }
}
