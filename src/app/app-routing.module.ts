import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { CourseComponent } from './components/course/course.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
        {
                path:'',
                component : HomeComponent   
        },
        {
                path:'home',
                component : HomeComponent
        },
        {
                path:'blog',
                component : BlogComponent
        },
        {
                path:'contact',
                component : ContactComponent
        },
        {
                path:'courses',
                component : CourseComponent
        }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
