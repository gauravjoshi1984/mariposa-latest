import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GardeningPage } from './gardening.page';

describe('GardeningPage', () => {
  let component: GardeningPage;
  let fixture: ComponentFixture<GardeningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardeningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GardeningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
