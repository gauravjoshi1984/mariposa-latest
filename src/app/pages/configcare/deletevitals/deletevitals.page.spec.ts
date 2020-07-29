import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletevitalsPage } from './deletevitals.page';

describe('DeletevitalsPage', () => {
  let component: DeletevitalsPage;
  let fixture: ComponentFixture<DeletevitalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletevitalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeletevitalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
