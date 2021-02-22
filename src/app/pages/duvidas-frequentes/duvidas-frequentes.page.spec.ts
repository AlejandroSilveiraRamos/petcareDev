import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DuvidasFrequentesPage } from './duvidas-frequentes.page';

describe('DuvidasFrequentesPage', () => {
  let component: DuvidasFrequentesPage;
  let fixture: ComponentFixture<DuvidasFrequentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuvidasFrequentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DuvidasFrequentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
