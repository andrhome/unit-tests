import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    service = TestBed.get(UserService);
    backend = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get one user', () => {
    const mockUser = {
      id: 1,
      firstName: 'John',
      lastName: 'Bonnes',
      age: 32
    };
    service.getOne(1).subscribe(user => {
      expect(user).toEqual(mockUser);
    });

    backend.expectOne({
      method: 'GET',
      url: 'http://localhost:3000/users/1'
    }).flush(mockUser);
  });

  it('should get all users', () => {
    const mockUsers = [{
      id: 1,
      firstName: 'John',
      lastName: 'Bonnes',
      age: 32
    }];
    service.getAll().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });

    backend.expectOne({
      method: 'GET',
      url: 'http://localhost:3000/users'
    }).flush(mockUsers);
  });
});
