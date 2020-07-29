import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditmemberPage } from './editmember.page';

describe('EditmemberPage', () => {
  let component: EditmemberPage;
  let fixture: ComponentFixture<EditmemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmemberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditmemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
