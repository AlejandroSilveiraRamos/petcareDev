import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadUsuarioDonoPage } from './cad-usuario-dono.page';

describe('CadUsuarioDonoPage', () => {
  let component: CadUsuarioDonoPage;
  let fixture: ComponentFixture<CadUsuarioDonoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadUsuarioDonoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadUsuarioDonoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
