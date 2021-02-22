import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SixComponent } from './six.component';

describe('SixComponent', () => {
  let component: SixComponent;
  let fixture: ComponentFixture<SixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
