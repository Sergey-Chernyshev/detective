import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DontDoComponent } from './dont-do.component';

describe('DontDoComponent', () => {
  let component: DontDoComponent;
  let fixture: ComponentFixture<DontDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DontDoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DontDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
