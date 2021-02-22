import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeDonePage } from './home-done.page';

describe('HomeDonePage', () => {
  let component: HomeDonePage;
  let fixture: ComponentFixture<HomeDonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeDonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
