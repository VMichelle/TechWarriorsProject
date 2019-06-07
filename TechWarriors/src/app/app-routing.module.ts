import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGenericService } from './services/auth-generic.service';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  // { path: 'login', component: LoginComponent, canActivate: [AuthGenericService] },
  { path: 'homepage', component: HomepageComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'about', component: AboutComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', redirectTo: '/homepage', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
