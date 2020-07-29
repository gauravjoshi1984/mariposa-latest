import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UseofelectronicsPage } from './useofelectronics.page';

describe('UseofelectronicsPage', () => {
  let component: UseofelectronicsPage;
  let fixture: ComponentFixture<UseofelectronicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseofelectronicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UseofelectronicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
