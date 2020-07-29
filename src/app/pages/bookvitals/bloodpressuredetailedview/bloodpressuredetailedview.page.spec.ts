import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloodpressuredetailedviewPage } from './bloodpressuredetailedview.page';

describe('BloodpressuredetailedviewPage', () => {
  let component: BloodpressuredetailedviewPage;
  let fixture: ComponentFixture<BloodpressuredetailedviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodpressuredetailedviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloodpressuredetailedviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
