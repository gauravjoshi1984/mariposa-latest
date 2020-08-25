import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddvitalComponent } from './addvital.component';

describe('AddvitalComponent', () => {
  let component: AddvitalComponent;
  let fixture: ComponentFixture<AddvitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvitalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddvitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
