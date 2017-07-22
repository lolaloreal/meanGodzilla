import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaAddComponent } from './trivia-add.component';

describe('TriviaAddComponent', () => {
  let component: TriviaAddComponent;
  let fixture: ComponentFixture<TriviaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
