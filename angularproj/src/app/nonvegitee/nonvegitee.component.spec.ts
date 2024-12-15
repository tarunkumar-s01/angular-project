import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegiteeComponent } from './nonvegitee.component';

describe('NonvegiteeComponent', () => {
  let component: NonvegiteeComponent;
  let fixture: ComponentFixture<NonvegiteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonvegiteeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonvegiteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
