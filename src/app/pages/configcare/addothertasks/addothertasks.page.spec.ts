import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddothertasksPage } from './addothertasks.page';

describe('AddothertasksPage', () => {
  let component: AddothertasksPage;
  let fixture: ComponentFixture<AddothertasksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddothertasksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddothertasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
