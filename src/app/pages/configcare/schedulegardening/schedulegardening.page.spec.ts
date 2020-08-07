import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedulegardeningPage } from './schedulegardening.page';

describe('SchedulegardeningPage', () => {
  let component: SchedulegardeningPage;
  let fixture: ComponentFixture<SchedulegardeningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulegardeningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulegardeningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
