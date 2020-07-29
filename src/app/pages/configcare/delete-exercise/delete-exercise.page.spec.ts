import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteExercisePage } from './delete-exercise.page';

describe('DeleteExercisePage', () => {
  let component: DeleteExercisePage;
  let fixture: ComponentFixture<DeleteExercisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteExercisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
