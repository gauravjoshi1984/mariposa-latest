import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletebeautyPage } from './deletebeauty.page';

describe('DeletebeautyPage', () => {
  let component: DeletebeautyPage;
  let fixture: ComponentFixture<DeletebeautyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletebeautyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeletebeautyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
