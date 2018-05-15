import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldesignComponent } from './modeldesign.component';

describe('ModeldesignComponent', () => {
  let component: ModeldesignComponent;
  let fixture: ComponentFixture<ModeldesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeldesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeldesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
