import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtpconfigComponent } from './ftpconfig.component';

describe('FtpconfigComponent', () => {
  let component: FtpconfigComponent;
  let fixture: ComponentFixture<FtpconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtpconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtpconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
