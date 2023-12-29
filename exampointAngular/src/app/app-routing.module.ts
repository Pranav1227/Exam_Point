import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewCategoriesComponent } from './view-categories/view-categories.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { ViewQuizzesComponent } from './view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './update-quiz/update-quiz.component';
import { ViewQuizQuestionComponent } from './view-quiz-question/view-quiz-question.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
 {
  path : 'admin-registration',
  component : AdminRegistrationComponent,
  pathMatch : 'full'

 },
 {
  path: 'user-registration',
  component : UserRegistrationComponent,
  pathMatch : 'full'
 },
 
 {
  path : 'admin-dashboard',
  component : AdminDashboardComponent,
  children:[
    {
      path : '',
      component : WelcomeComponent,
    },
    {
      path : 'profile',
      component : ProfileComponent,
    },
    {
      path : 'view-categories',
      component : ViewCategoriesComponent,
      
    },
    {
      path : 'add-category',
      component : AddCategoriesComponent,
    },
    {
      path : 'quizzes',
      component : ViewQuizzesComponent,
    },
    {
      path: 'add-quiz',
      component : AddQuizComponent,
    },
    {
      path : 'quiz/:qid',
      component : UpdateQuizComponent,

    },
    {
      path : 'view-question/:id/:title',
      component : ViewQuizQuestionComponent,
    },

  ]
 },

 {
  path : 'user-dashboard',
  component : UserDashboardComponent,
  pathMatch : 'full'
 },


 {
  path: 'admin-login',
  component : AdminLoginComponent,
  pathMatch : 'full'
 },
{
  path: 'user-login',
  component : UserLoginComponent,
  pathMatch : 'full'
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
