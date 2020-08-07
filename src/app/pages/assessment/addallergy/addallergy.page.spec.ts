import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddallergyPage } from './addallergy.page';

describe('AddallergyPage', () => {
  let component: AddallergyPage;
  let fixture: ComponentFixture<AddallergyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddallergyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddallergyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
