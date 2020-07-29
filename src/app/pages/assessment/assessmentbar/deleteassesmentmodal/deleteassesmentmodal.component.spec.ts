import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteassesmentmodalComponent } from './deleteassesmentmodal.component';

describe('DeleteassesmentmodalComponent', () => {
  let component: DeleteassesmentmodalComponent;
  let fixture: ComponentFixture<DeleteassesmentmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteassesmentmodalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteassesmentmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
