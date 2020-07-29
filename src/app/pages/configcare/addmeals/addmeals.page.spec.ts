import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddmealsPage } from './addmeals.page';

describe('AddmealsPage', () => {
  let component: AddmealsPage;
  let fixture: ComponentFixture<AddmealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmealsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddmealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
