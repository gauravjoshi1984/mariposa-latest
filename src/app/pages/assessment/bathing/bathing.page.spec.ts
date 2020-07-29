import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BathingPage } from './bathing.page';

describe('BathingPage', () => {
  let component: BathingPage;
  let fixture: ComponentFixture<BathingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BathingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BathingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
