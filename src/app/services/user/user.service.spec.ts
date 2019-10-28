import { fakeAsync, TestBed, tick } from '@angular/core/testing';
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
      url: `${service.baseUrl}/1`
    }).flush(mockUser);
  });

  it('should get all users', fakeAsync(() => {
    let response = null;
    const mockUsers = [{
      id: 1,
      firstName: 'John',
      lastName: 'Bonnes',
      age: 32
    }];
    service.getAll().subscribe(users => response = users);

    const requestWrapper = backend.expectOne({url: service.baseUrl});
    requestWrapper.flush(mockUsers);

    tick();

    expect(requestWrapper.request.method).toEqual('GET');
    expect(response).toEqual(mockUsers);
  }));

  // it('users array should not be empty', fakeAsync(() => {
  //   service.getAll().subscribe(users => {
  //     console.log('users ', users);
  //     expect(users).not.toBeNull();
  //     expect(users.length).toBeGreaterThan(0);
  //   });
  //   flush();
  // }));
});
