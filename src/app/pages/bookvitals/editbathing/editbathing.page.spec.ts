import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditbathingPage } from './editbathing.page';

describe('EditbathingPage', () => {
  let component: EditbathingPage;
  let fixture: ComponentFixture<EditbathingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbathingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditbathingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
