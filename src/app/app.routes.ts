import { GestionPostsComponent } from './gestion-posts/listPost/gestion-posts.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdatePostComponent } from './gestion-posts/update-post/update-post.component';


export const routes: Routes = [
  {path : '', component : DashboardComponent},
  {path :'posts',component : GestionPostsComponent},
  {path : 'modifierPost/:id',component : UpdatePostComponent }
];
