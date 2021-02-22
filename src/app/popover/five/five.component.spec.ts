import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiveComponent } from './five.component';

describe('FiveComponent', () => {
  let component: FiveComponent;
  let fixture: ComponentFixture<FiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
