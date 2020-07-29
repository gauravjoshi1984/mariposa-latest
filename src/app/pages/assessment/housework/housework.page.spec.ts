import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HouseworkPage } from './housework.page';

describe('HouseworkPage', () => {
  let component: HouseworkPage;
  let fixture: ComponentFixture<HouseworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseworkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HouseworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
