import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepassistancePage } from './sleepassistance.page';

describe('SleepassistancePage', () => {
  let component: SleepassistancePage;
  let fixture: ComponentFixture<SleepassistancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepassistancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepassistancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
