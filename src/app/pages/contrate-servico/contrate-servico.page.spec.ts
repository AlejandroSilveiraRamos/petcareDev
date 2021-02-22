import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContrateServicoPage } from './contrate-servico.page';

describe('ContrateServicoPage', () => {
  let component: ContrateServicoPage;
  let fixture: ComponentFixture<ContrateServicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContrateServicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContrateServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
