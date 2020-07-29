import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicalconditionsPage } from './medicalconditions.page';

describe('MedicalconditionsPage', () => {
  let component: MedicalconditionsPage;
  let fixture: ComponentFixture<MedicalconditionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalconditionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicalconditionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
