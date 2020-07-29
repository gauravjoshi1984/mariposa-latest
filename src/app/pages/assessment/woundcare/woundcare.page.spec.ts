import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WoundcarePage } from './woundcare.page';

describe('WoundcarePage', () => {
  let component: WoundcarePage;
  let fixture: ComponentFixture<WoundcarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoundcarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WoundcarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
