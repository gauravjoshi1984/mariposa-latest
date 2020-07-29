import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddshoppinglistPage } from './addshoppinglist.page';

describe('AddshoppinglistPage', () => {
  let component: AddshoppinglistPage;
  let fixture: ComponentFixture<AddshoppinglistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddshoppinglistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddshoppinglistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
