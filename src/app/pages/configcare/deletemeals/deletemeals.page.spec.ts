import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletemealsPage } from './deletemeals.page';

describe('DeletemealsPage', () => {
  let component: DeletemealsPage;
  let fixture: ComponentFixture<DeletemealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletemealsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeletemealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
