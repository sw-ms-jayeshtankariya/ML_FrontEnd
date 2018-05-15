import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditprojectdialogComponent } from './addeditprojectdialog.component';

describe('Add/Edit Project Dialog Component', () => {
  let component: AddeditprojectdialogComponent;
  let fixture: ComponentFixture<AddeditprojectdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditprojectdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditprojectdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
