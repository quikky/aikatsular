import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AikatsuFriendsComponent } from './aikatsu-friends.component';

describe('AikatsuFriendsComponent', () => {
  let component: AikatsuFriendsComponent;
  let fixture: ComponentFixture<AikatsuFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AikatsuFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AikatsuFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
