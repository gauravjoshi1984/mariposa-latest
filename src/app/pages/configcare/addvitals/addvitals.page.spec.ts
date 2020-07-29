import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddvitalsPage } from './addvitals.page';

describe('AddvitalsPage', () => {
  let component: AddvitalsPage;
  let fixture: ComponentFixture<AddvitalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvitalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddvitalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
