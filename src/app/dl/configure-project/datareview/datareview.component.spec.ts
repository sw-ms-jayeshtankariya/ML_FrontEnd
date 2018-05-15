import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatareviewComponent } from './datareview.component';

describe('DatareviewComponent', () => {
  let component: DatareviewComponent;
  let fixture: ComponentFixture<DatareviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatareviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatareviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
