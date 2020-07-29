import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OralcarePage } from './oralcare.page';

describe('OralcarePage', () => {
  let component: OralcarePage;
  let fixture: ComponentFixture<OralcarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OralcarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OralcarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
