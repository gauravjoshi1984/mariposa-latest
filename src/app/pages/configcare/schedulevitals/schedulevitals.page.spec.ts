import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedulevitalsPage } from './schedulevitals.page';

describe('SchedulevitalsPage', () => {
  let component: SchedulevitalsPage;
  let fixture: ComponentFixture<SchedulevitalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulevitalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulevitalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
