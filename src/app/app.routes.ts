import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { NgModule } from '@angular/core';
import { Form1Component } from './form1/form1.component';
import { MainComponent } from './main/main.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'p1', component: ParentComponent },
    { path: 'p2', component: Form1Component },
    { path: 'p3', component: UserListComponent },
];
