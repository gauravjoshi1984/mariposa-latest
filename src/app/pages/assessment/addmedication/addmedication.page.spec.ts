import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddmedicationPage } from './addmedication.page';

describe('AddmedicationPage', () => {
  let component: AddmedicationPage;
  let fixture: ComponentFixture<AddmedicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmedicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddmedicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
