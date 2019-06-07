import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGenericService } from './services/auth-generic.service';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { PublicContentComponent } from './public-content/public-content.component';
<<<<<<< HEAD
import { UploaderComponent } from './uploader/uploader.component';
=======
>>>>>>> 2c4fa18b6d191b3e0306ffe169f2feb9917be900


const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
  {path: 'content', component: PublicContentComponent},
  {path: 'uploader', component: UploaderComponent},
  // { path: 'login', component: LoginComponent, canActivate: [AuthGenericService] },
  { path: 'homepage', component: HomepageComponent },
  // { path: 'upload', component: FileUploadComponent },
  { path: 'about', component: AboutComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', redirectTo: '/homepage', pathMatch: 'full' },

=======
  { path: 'homepage', component: HomepageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'content', component: PublicContentComponent},
  { path: '**', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'user', component: PublicContentComponent}
>>>>>>> 2c4fa18b6d191b3e0306ffe169f2feb9917be900
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
