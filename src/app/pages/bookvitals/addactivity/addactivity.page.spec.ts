import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddactivityPage } from './addactivity.page';

describe('AddactivityPage', () => {
  let component: AddactivityPage;
  let fixture: ComponentFixture<AddactivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddactivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddactivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
