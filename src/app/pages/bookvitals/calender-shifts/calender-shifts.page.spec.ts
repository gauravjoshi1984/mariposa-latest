import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalenderShiftsPage } from './calender-shifts.page';

describe('CalenderShiftsPage', () => {
  let component: CalenderShiftsPage;
  let fixture: ComponentFixture<CalenderShiftsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderShiftsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalenderShiftsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
