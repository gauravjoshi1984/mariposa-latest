import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddmedicinePage } from './addmedicine.page';

describe('AddmedicinePage', () => {
  let component: AddmedicinePage;
  let fixture: ComponentFixture<AddmedicinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmedicinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddmedicinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
