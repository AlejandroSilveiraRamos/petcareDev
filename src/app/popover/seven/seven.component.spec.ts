import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SevenComponent } from './seven.component';

describe('SevenComponent', () => {
  let component: SevenComponent;
  let fixture: ComponentFixture<SevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
