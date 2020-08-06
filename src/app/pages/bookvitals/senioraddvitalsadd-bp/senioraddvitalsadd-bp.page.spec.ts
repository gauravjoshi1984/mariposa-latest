import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SenioraddvitalsaddBPPage } from './senioraddvitalsadd-bp.page';

describe('SenioraddvitalsaddBPPage', () => {
  let component: SenioraddvitalsaddBPPage;
  let fixture: ComponentFixture<SenioraddvitalsaddBPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenioraddvitalsaddBPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SenioraddvitalsaddBPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
