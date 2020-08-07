import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedulelaundryPage } from './schedulelaundry.page';

describe('SchedulelaundryPage', () => {
  let component: SchedulelaundryPage;
  let fixture: ComponentFixture<SchedulelaundryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulelaundryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulelaundryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
