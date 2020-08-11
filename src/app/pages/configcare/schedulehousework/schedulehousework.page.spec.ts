import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedulehouseworkPage } from './schedulehousework.page';

describe('SchedulehouseworkPage', () => {
  let component: SchedulehouseworkPage;
  let fixture: ComponentFixture<SchedulehouseworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulehouseworkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulehouseworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
