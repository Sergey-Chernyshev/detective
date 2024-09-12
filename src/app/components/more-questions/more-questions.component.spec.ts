import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreQuestionsComponent } from './more-questions.component';

describe('MoreQuestionsComponent', () => {
  let component: MoreQuestionsComponent;
  let fixture: ComponentFixture<MoreQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
