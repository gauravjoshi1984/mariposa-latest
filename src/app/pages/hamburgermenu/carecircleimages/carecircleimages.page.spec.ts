import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarecircleimagesPage } from './carecircleimages.page';

describe('CarecircleimagesPage', () => {
  let component: CarecircleimagesPage;
  let fixture: ComponentFixture<CarecircleimagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarecircleimagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarecircleimagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
