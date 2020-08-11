import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddoutfitPage } from './addoutfit.page';

describe('AddoutfitPage', () => {
  let component: AddoutfitPage;
  let fixture: ComponentFixture<AddoutfitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoutfitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddoutfitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
