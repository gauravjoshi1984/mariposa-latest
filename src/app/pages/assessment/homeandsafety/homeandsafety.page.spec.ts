import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeandsafetyPage } from './homeandsafety.page';

describe('HomeandsafetyPage', () => {
  let component: HomeandsafetyPage;
  let fixture: ComponentFixture<HomeandsafetyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeandsafetyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeandsafetyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
