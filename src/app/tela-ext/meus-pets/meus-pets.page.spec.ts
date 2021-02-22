import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeusPetsPage } from './meus-pets.page';

describe('MeusPetsPage', () => {
  let component: MeusPetsPage;
  let fixture: ComponentFixture<MeusPetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusPetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeusPetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
