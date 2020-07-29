import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreviewassessmentPage } from './previewassessment.page';

describe('PreviewassessmentPage', () => {
  let component: PreviewassessmentPage;
  let fixture: ComponentFixture<PreviewassessmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewassessmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreviewassessmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
