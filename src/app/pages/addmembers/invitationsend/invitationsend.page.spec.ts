import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvitationsendPage } from './invitationsend.page';

describe('InvitationsendPage', () => {
  let component: InvitationsendPage;
  let fixture: ComponentFixture<InvitationsendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationsendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvitationsendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
