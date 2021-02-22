import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SejaCuidadorPage } from './seja-cuidador.page';

describe('SejaCuidadorPage', () => {
  let component: SejaCuidadorPage;
  let fixture: ComponentFixture<SejaCuidadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SejaCuidadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SejaCuidadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
