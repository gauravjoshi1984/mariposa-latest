import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeniorprofilePage } from './seniorprofile.page';

describe('SeniorprofilePage', () => {
  let component: SeniorprofilePage;
  let fixture: ComponentFixture<SeniorprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeniorprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeniorprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
