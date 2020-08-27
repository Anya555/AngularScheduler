import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationConfirmationComponent } from './cancellation-confirmation.component';

describe('CancellationConfirmationComponent', () => {
  let component: CancellationConfirmationComponent;
  let fixture: ComponentFixture<CancellationConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancellationConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancellationConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
