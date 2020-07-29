import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RenamecarecirclePage } from './renamecarecircle.page';

describe('RenamecarecirclePage', () => {
  let component: RenamecarecirclePage;
  let fixture: ComponentFixture<RenamecarecirclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenamecarecirclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RenamecarecirclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
