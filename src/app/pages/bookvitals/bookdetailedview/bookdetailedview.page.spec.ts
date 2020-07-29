import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookdetailedviewPage } from './bookdetailedview.page';

describe('BookdetailedviewPage', () => {
  let component: BookdetailedviewPage;
  let fixture: ComponentFixture<BookdetailedviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookdetailedviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookdetailedviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
