import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckvitalsPage } from './checkvitals.page';

describe('CheckvitalsPage', () => {
  let component: CheckvitalsPage;
  let fixture: ComponentFixture<CheckvitalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckvitalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckvitalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
