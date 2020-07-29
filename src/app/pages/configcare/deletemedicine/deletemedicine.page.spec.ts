import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletemedicinePage } from './deletemedicine.page';

describe('DeletemedicinePage', () => {
  let component: DeletemedicinePage;
  let fixture: ComponentFixture<DeletemedicinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletemedicinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeletemedicinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
