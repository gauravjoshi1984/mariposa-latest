import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomerepairPage } from './homerepair.page';

describe('HomerepairPage', () => {
  let component: HomerepairPage;
  let fixture: ComponentFixture<HomerepairPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomerepairPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomerepairPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
