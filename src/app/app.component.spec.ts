import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { Title } from '@angular/platform-browser';
describe('App Component', () => {
  // tslint:disable-next-line:prefer-const
  let badTitleService: Title;
  // tslint:disable-next-line:prefer-const
  let fixtureComponent: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [Title],
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
    fixtureComponent = TestBed.createComponent(AppComponent);
    badTitleService = TestBed.get(Title);
  }));
  it('should have injected title service', (inject([Title], (injectService: Title) => {
    expect(injectService).toBe(badTitleService);
  })));
});
