import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobilityPage } from './mobility.page';

describe('MobilityPage', () => {
  let component: MobilityPage;
  let fixture: ComponentFixture<MobilityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
