import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarecirclePage } from './carecircle.page';

describe('CarecirclePage', () => {
  let component: CarecirclePage;
  let fixture: ComponentFixture<CarecirclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarecirclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarecirclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
