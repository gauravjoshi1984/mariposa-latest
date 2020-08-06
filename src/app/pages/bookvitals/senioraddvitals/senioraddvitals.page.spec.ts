import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SenioraddvitalsPage } from './senioraddvitals.page';

describe('SenioraddvitalsPage', () => {
  let component: SenioraddvitalsPage;
  let fixture: ComponentFixture<SenioraddvitalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenioraddvitalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SenioraddvitalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
