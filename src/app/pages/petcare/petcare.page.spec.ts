import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PetcarePage } from './petcare.page';

describe('PetcarePage', () => {
  let component: PetcarePage;
  let fixture: ComponentFixture<PetcarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetcarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PetcarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
