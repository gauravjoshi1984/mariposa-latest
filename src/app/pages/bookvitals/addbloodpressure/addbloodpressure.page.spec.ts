import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddbloodpressurePage } from './addbloodpressure.page';

describe('AddbloodpressurePage', () => {
  let component: AddbloodpressurePage;
  let fixture: ComponentFixture<AddbloodpressurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbloodpressurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddbloodpressurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
