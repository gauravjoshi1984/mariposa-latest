import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroomingPage } from './grooming.page';

describe('GroomingPage', () => {
  let component: GroomingPage;
  let fixture: ComponentFixture<GroomingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroomingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
