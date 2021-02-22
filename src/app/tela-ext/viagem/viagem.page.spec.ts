import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViagemPage } from './viagem.page';

describe('ViagemPage', () => {
  let component: ViagemPage;
  let fixture: ComponentFixture<ViagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViagemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
