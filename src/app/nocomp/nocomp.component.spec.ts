import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NocompComponent } from './nocomp.component';

describe('NocompComponent', () => {
  let component: NocompComponent;
  let fixture: ComponentFixture<NocompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NocompComponent]
    });
    fixture = TestBed.createComponent(NocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
