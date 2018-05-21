import { Component, ViewChild, OnInit } from '@angular/core';
import { Model } from '../../_models/model';
// tslint:disable-next-line:import-blacklist
import { Subject } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { fadeInAnimation } from '../../_animations/fade-in.animation';

@Component({
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@fadeInAnimation]': ''}
})
export class ModelsComponent implements OnInit {
  models: Model[] = [];
  title = 'app';
  @ViewChild('tblModels')
  private tblModels: DataTables.DataTables;
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  constructor(private http: Http, private titleService: Title) {
    this.setTitle('Models');
  }

  ngOnInit(): void {
    this.dtOptions = {
      pageLength: 5
    };
    this.http.get('assets/data/modelData.json')
      .map(this.extractData)
      .subscribe(tData => {
        this.models = tData;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }
}
