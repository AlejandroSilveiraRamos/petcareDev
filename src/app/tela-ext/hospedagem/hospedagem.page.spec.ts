import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HospedagemPage } from './hospedagem.page';

describe('HospedagemPage', () => {
  let component: HospedagemPage;
  let fixture: ComponentFixture<HospedagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospedagemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HospedagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
