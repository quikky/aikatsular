import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AikatsuStarsComponent } from './aikatsu-stars.component';

describe('AikatsuStarsComponent', () => {
  let component: AikatsuStarsComponent;
  let fixture: ComponentFixture<AikatsuStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AikatsuStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AikatsuStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
