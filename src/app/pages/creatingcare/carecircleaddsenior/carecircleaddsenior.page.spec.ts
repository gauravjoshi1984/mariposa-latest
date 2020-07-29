import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarecircleaddseniorPage } from './carecircleaddsenior.page';

describe('CarecircleaddseniorPage', () => {
  let component: CarecircleaddseniorPage;
  let fixture: ComponentFixture<CarecircleaddseniorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarecircleaddseniorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarecircleaddseniorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
