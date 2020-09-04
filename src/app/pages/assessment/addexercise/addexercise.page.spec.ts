import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddexercisePage } from './addexercise.page';

describe('AddexercisePage', () => {
  let component: AddexercisePage;
  let fixture: ComponentFixture<AddexercisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexercisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddexercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
