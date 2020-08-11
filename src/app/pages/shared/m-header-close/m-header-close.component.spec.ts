import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MHeaderCloseComponent } from './m-header-close.component';

describe('MHeaderCloseComponent', () => {
  let component: MHeaderCloseComponent;
  let fixture: ComponentFixture<MHeaderCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MHeaderCloseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MHeaderCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
