import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddbeautyPage } from './addbeauty.page';

describe('AddbeautyPage', () => {
  let component: AddbeautyPage;
  let fixture: ComponentFixture<AddbeautyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbeautyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddbeautyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
