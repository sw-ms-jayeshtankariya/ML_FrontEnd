import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditprojectdialogComponent } from './addeditprojectdialog.component';

describe('AddeditprojectdialogComponent', () => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
