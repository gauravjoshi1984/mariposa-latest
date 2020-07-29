import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfigcarecompletedPage } from './configcarecompleted.page';

describe('ConfigcarecompletedPage', () => {
  let component: ConfigcarecompletedPage;
  let fixture: ComponentFixture<ConfigcarecompletedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigcarecompletedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigcarecompletedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
