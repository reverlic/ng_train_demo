import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
    id: number;
    name: string;
    email: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl);
    }

    getUsersButWireCut(): Observable<User[]> {
        return this.http.get<User[]>('https://127.0.0.1/unknowend');
    }

    // getUserById(id: number): Observable<User> {
    //     return this.http.get<User>(`${this.apiUrl}/${id}`);
    // }

    // createUser(user: User): Observable<User> {
    //     return this.http.post<User>(this.apiUrl, user);
    // }

    // updateUser(id: number, user: User): Observable<User> {
    //     return this.http.put<User>(`${this.apiUrl}/${id}`, user);
    // }

    // patchUser(id: number, changes: Partial<User>): Observable<User> {
    //     return this.http.patch<User>(`${this.apiUrl}/${id}`, changes);
    // }

    // deleteUser(id: number): Observable<void> {
    //     return this.http.delete<void>(`${this.apiUrl}/${id}`);
    // }

}