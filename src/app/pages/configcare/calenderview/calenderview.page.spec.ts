import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalenderviewPage } from './calenderview.page';

describe('CalenderviewPage', () => {
  let component: CalenderviewPage;
  let fixture: ComponentFixture<CalenderviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalenderviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
