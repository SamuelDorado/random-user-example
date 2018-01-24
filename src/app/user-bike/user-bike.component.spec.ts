import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBikeComponent } from './user-bike.component';

describe('UserBikeComponent', () => {
  let component: UserBikeComponent;
  let fixture: ComponentFixture<UserBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
