import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssignshoppinglistPage } from './assignshoppinglist.page';

describe('AssignshoppinglistPage', () => {
  let component: AssignshoppinglistPage;
  let fixture: ComponentFixture<AssignshoppinglistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignshoppinglistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssignshoppinglistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
