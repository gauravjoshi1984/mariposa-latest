import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MSelectdateComponent } from './m-selectdate.component';

describe('MSelectdateComponent', () => {
  let component: MSelectdateComponent;
  let fixture: ComponentFixture<MSelectdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MSelectdateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MSelectdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
