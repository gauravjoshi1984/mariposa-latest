import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewshoppinglistPage } from './viewshoppinglist.page';

describe('ViewshoppinglistPage', () => {
  let component: ViewshoppinglistPage;
  let fixture: ComponentFixture<ViewshoppinglistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewshoppinglistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewshoppinglistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
