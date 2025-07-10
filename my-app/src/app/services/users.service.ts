import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<user[]> {
    const url = 'http://localhost:3000/users';
    return this.http.get<user[]>(url);
  }

  saveUsers(user:user):Observable<user>{
    const url = 'http://localhost:3000/users';
    return this.http.post<user>(url,user)
  }

  deleteUsers(id:string):Observable<user>{
    const url = 'http://localhost:3000/users';
    return this.http.delete<user>(url+"/"+id)
  }

  getSelectedUser(id:string):Observable<user>{
    const url = 'http://localhost:3000/users';
    return this.http.get<user>(url+"/"+id)
  }

  updateUser(user:user):Observable<user>{
    const url = 'http://localhost:3000/users';
    return this.http.put<user>(url+"/"+user.id,user)
  }
}
