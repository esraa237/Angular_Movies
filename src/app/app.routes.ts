import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ListOneComponent } from './list-one/list-one.component';



export const routes: Routes = [
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'home',redirectTo:'list',pathMatch:'full'},
  { path: 'list', component: ListComponent,title:'Trends',children:[
    {path:':id',component:ListOneComponent,title:'Details'},
  ]},
  { path:'people', loadComponent: () => import('./people/people.component').then(m => m.PeopleComponent),title:'People',children:[
    { path: ':id', component: ListOneComponent,title:'Details' } 
  ]},
  { path:'movie', loadComponent: () => import('./movie/movie.component').then(m => m.MovieComponent),title:'Movie',children:[
    { path: ':id', component: ListOneComponent,title:'Details' } 
  ]},
  { path:'tv', loadComponent: () => import('./tv/tv.component').then(m => m.TvComponent),title:'TV Shows',children:[
    { path: ':id', component: ListOneComponent,title:'Details' } 
  ]},
  {path:'**',loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent),title:'Not Found'},
];
