import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasseioServicesPage } from './passeio-services.page';

describe('PasseioServicesPage', () => {
  let component: PasseioServicesPage;
  let fixture: ComponentFixture<PasseioServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasseioServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasseioServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
