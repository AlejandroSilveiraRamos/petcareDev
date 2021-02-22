import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HospedagemServicesPage } from './hospedagem-services.page';

describe('HospedagemServicesPage', () => {
  let component: HospedagemServicesPage;
  let fixture: ComponentFixture<HospedagemServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospedagemServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HospedagemServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
