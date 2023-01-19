import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItem2Component } from './user-item2.component';

describe('UserItem2Component', () => {
  let component: UserItem2Component;
  let fixture: ComponentFixture<UserItem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserItem2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
