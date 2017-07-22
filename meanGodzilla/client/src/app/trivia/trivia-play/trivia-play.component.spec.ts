import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaPlayComponent } from './trivia-play.component';

describe('TriviaPlayComponent', () => {
  let component: TriviaPlayComponent;
  let fixture: ComponentFixture<TriviaPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
