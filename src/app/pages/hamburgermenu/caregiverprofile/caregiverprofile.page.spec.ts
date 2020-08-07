import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaregiverprofilePage } from './caregiverprofile.page';

describe('CaregiverprofilePage', () => {
  let component: CaregiverprofilePage;
  let fixture: ComponentFixture<CaregiverprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaregiverprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaregiverprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
