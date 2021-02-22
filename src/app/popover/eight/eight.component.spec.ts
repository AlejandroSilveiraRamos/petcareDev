import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EightComponent } from './eight.component';

describe('EightComponent', () => {
  let component: EightComponent;
  let fixture: ComponentFixture<EightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EightComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
