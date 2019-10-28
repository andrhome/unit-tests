import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';
import { UserService } from '../../services/user/user.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;
  let userService: UserService;
  let spy: jasmine.Spy;
  let mockUser;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ UserCardComponent ],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
    mockUser = {
      id: 1,
      firstName: 'John',
      lastName: 'Bonnes',
      age: 32
    };
    spy = spyOn(userService, 'getOne').and.returnValue(of(mockUser));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the UserService', () => {
    component.fetchUser();
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should set a user', () => {
    component.fetchUser();
    expect(component.user).toEqual(mockUser);
  });
});
