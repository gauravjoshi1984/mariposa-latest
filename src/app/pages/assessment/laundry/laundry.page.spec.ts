import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaundryPage } from './laundry.page';

describe('LaundryPage', () => {
  let component: LaundryPage;
  let fixture: ComponentFixture<LaundryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaundryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaundryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
