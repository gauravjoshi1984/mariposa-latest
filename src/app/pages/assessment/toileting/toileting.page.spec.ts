import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToiletingPage } from './toileting.page';

describe('ToiletingPage', () => {
  let component: ToiletingPage;
  let fixture: ComponentFixture<ToiletingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToiletingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToiletingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
