import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanionshipPage } from './companionship.page';

describe('CompanionshipPage', () => {
  let component: CompanionshipPage;
  let fixture: ComponentFixture<CompanionshipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionshipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanionshipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
