import { Component } from '@angular/core';
import { User, UserService } from '../services/userService';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-user-list',
    imports: [JsonPipe],
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.scss'
})
export class UserListComponent {
    users: User[] = [];
    error = null;
    constructor(private userService: UserService) { }

    loadFrom(source: Observable<User[]>) {
        this.users = [];
        this.error = null;

        source.subscribe({
            next: (data) => this.users = data,
            error: (err) => this.error = err
        });
    }

    load() {
        this.loadFrom(this.userService.getUsers());
    }

    loadFail() {
        this.loadFrom(this.userService.getUsersButWireCut());
    }
}   