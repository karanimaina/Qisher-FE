import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {BlogComponent} from "./components/blog/blog.component";

import {ServicesComponent} from "./components/services/services.component";
import {TeamComponent} from "./components/team/team.component";
import {ContactComponent} from "./components/contact/contact.component";
import {ValuesComponent} from "./components/values/values.component";
import {MgtComponent} from "./serv/mgt/mgt.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'nav',component:NavigationComponent},
  {path:'team',component:TeamComponent},
  {path:'services',component:ServicesComponent},
  {path: 'contact', component:ContactComponent},
  {path:'values',component:ValuesComponent},
  {path:'mgt',component:MgtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
