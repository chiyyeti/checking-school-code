import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NalandaComponent } from './nalanda.component';

describe('NalandaComponent', () => {
  let component: NalandaComponent;
  let fixture: ComponentFixture<NalandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NalandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NalandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
