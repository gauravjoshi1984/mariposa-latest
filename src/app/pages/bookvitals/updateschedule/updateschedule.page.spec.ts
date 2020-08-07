import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateschedulePage } from './updateschedule.page';

describe('UpdateschedulePage', () => {
  let component: UpdateschedulePage;
  let fixture: ComponentFixture<UpdateschedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateschedulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateschedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
