import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuestionComponent } from './list-question.component';

describe('ListQuestionComponent', () => {
  let component: ListQuestionComponent;
  let fixture: ComponentFixture<ListQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
