import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, concatMap, map, mergeMap, of, shareReplay, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../types/user.type';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: any[] = [];

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<User[]> {
    if (this.users.length) return of(this.users);

    return this._http.get<User[]>(`${environment.api}users.json`).pipe(
      tap((users) => {
        this.users = users
      }),
      catchError(() => of([]))
    )
  }
}
