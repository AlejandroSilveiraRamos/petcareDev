import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViagemServicesPage } from './viagem-services.page';

describe('ViagemServicesPage', () => {
  let component: ViagemServicesPage;
  let fixture: ComponentFixture<ViagemServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViagemServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViagemServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
