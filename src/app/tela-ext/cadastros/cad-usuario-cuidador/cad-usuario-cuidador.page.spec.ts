import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadUsuarioCuidadorPage } from './cad-usuario-cuidador.page';

describe('CadUsuarioCuidadorPage', () => {
  let component: CadUsuarioCuidadorPage;
  let fixture: ComponentFixture<CadUsuarioCuidadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadUsuarioCuidadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadUsuarioCuidadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
