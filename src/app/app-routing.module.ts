import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';
import { CourseListComponent } from './course-list/course-list.component';
import { EditcourseComponent } from './editcourse/editcourse.component';


const redirectUnauthorizedToLanding = redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  { path: "courses",

children:[
  {
path:'', component:CourseListComponent
  },
  {
    path:'edit/:id', component:EditcourseComponent
      }
]
},
  {
    path: "about", component: AboutComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
