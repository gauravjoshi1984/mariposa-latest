import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssessmentcompletePage } from './assessmentcomplete.page';

describe('AssessmentcompletePage', () => {
  let component: AssessmentcompletePage;
  let fixture: ComponentFixture<AssessmentcompletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentcompletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssessmentcompletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
