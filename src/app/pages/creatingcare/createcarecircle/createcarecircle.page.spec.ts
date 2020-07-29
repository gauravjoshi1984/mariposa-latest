import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatecarecirclePage } from './createcarecircle.page';

describe('CreatecarecirclePage', () => {
  let component: CreatecarecirclePage;
  let fixture: ComponentFixture<CreatecarecirclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecarecirclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatecarecirclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
