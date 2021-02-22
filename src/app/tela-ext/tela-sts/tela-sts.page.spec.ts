import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaStsPage } from './tela-sts.page';

describe('TelaStsPage', () => {
  let component: TelaStsPage;
  let fixture: ComponentFixture<TelaStsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaStsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaStsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
