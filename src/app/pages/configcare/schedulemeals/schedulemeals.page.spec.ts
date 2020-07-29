import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedulemealsPage } from './schedulemeals.page';

describe('SchedulemealsPage', () => {
  let component: SchedulemealsPage;
  let fixture: ComponentFixture<SchedulemealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulemealsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulemealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
