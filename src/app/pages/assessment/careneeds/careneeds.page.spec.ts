import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CareneedsPage } from './careneeds.page';

describe('CareneedsPage', () => {
  let component: CareneedsPage;
  let fixture: ComponentFixture<CareneedsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareneedsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CareneedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
