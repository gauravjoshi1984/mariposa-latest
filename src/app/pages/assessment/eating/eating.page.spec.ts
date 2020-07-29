import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EatingPage } from './eating.page';

describe('EatingPage', () => {
  let component: EatingPage;
  let fixture: ComponentFixture<EatingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
