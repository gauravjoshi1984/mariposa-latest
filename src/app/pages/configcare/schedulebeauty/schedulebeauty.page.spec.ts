import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedulebeautyPage } from './schedulebeauty.page';

describe('SchedulebeautyPage', () => {
  let component: SchedulebeautyPage;
  let fixture: ComponentFixture<SchedulebeautyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulebeautyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulebeautyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
