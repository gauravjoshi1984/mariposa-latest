import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditshoppinglistPage } from './editshoppinglist.page';

describe('EditshoppinglistPage', () => {
  let component: EditshoppinglistPage;
  let fixture: ComponentFixture<EditshoppinglistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditshoppinglistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditshoppinglistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
