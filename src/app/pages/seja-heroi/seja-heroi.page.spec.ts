import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SejaHeroiPage } from './seja-heroi.page';

describe('SejaHeroiPage', () => {
  let component: SejaHeroiPage;
  let fixture: ComponentFixture<SejaHeroiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SejaHeroiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SejaHeroiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
