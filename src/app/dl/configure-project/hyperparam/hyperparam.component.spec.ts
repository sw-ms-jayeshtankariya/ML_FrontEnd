import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyperparamComponent } from './hyperparam.component';

describe('HyperparamComponent', () => {
  let component: HyperparamComponent;
  let fixture: ComponentFixture<HyperparamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyperparamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyperparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
