import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedulewoundcarePage } from './schedulewoundcare.page';

describe('SchedulewoundcarePage', () => {
  let component: SchedulewoundcarePage;
  let fixture: ComponentFixture<SchedulewoundcarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulewoundcarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulewoundcarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
