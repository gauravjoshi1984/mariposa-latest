import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowcarecirclePage } from './showcarecircle.page';

describe('ShowcarecirclePage', () => {
  let component: ShowcarecirclePage;
  let fixture: ComponentFixture<ShowcarecirclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcarecirclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowcarecirclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
