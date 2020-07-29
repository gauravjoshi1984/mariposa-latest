import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DressingPage } from './dressing.page';

describe('DressingPage', () => {
  let component: DressingPage;
  let fixture: ComponentFixture<DressingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DressingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DressingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
