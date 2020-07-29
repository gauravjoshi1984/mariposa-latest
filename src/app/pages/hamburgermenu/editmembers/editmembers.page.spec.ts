import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditmembersPage } from './editmembers.page';

describe('EditmembersPage', () => {
  let component: EditmembersPage;
  let fixture: ComponentFixture<EditmembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmembersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditmembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
