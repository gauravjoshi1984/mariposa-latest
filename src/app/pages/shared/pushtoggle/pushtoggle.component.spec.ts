import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PushtoggleComponent } from './pushtoggle.component';

describe('PushtoggleComponent', () => {
  let component: PushtoggleComponent;
  let fixture: ComponentFixture<PushtoggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushtoggleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PushtoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
