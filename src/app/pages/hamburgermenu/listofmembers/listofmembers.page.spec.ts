import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListofmembersPage } from './listofmembers.page';

describe('ListofmembersPage', () => {
  let component: ListofmembersPage;
  let fixture: ComponentFixture<ListofmembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofmembersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListofmembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
