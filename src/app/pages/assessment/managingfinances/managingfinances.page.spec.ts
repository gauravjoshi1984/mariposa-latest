import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagingfinancesPage } from './managingfinances.page';

describe('ManagingfinancesPage', () => {
  let component: ManagingfinancesPage;
  let fixture: ComponentFixture<ManagingfinancesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagingfinancesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagingfinancesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
