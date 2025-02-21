import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicObervablesComponent } from './topic-obervables.component';

describe('TopicObervablesComponent', () => {
  let component: TopicObervablesComponent;
  let fixture: ComponentFixture<TopicObervablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicObervablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicObervablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
