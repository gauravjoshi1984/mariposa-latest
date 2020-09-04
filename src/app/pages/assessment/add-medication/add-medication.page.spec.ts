import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddMedicationPage } from './add-medication.page';

describe('AddMedicationPage', () => {
  let component: AddMedicationPage;
  let fixture: ComponentFixture<AddMedicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddMedicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
