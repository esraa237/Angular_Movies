import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListOneComponent } from './list-one/list-one.component';


export const routes: Routes = [
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'home',redirectTo:'list',pathMatch:'full'},
  { path: 'list', component: ListComponent,title:'Trends',children:[
    {path:':id',component:ListOneComponent,title:'Details'},
  ]},
  { path: 'people', component: PeopleComponent,title:'People' },
  { path:'tv', component: TvComponent,title:'TV' },
  { path:'movie', component: TvComponent,title:'Movie' },
  {path:'**', component:NotFoundComponent,title:'404 Not Found'}
];
