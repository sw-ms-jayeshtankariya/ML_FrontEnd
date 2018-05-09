import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparedDataComponent } from './prepared-data.component';

describe('PreparedDataComponent', () => {
  let component: PreparedDataComponent;
  let fixture: ComponentFixture<PreparedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
