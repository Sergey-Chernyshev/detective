import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseBlockComponent } from './license-block.component';

describe('LicenseBlockComponent', () => {
  let component: LicenseBlockComponent;
  let fixture: ComponentFixture<LicenseBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicenseBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
