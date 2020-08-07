import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResetcheckmailPage } from './resetcheckmail.page';

describe('ResetcheckmailPage', () => {
  let component: ResetcheckmailPage;
  let fixture: ComponentFixture<ResetcheckmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetcheckmailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResetcheckmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
