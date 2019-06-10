import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGenericService } from './services/auth-generic.service';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { PublicContentComponent } from './public-content/public-content.component';
import { UploaderComponent } from './uploader/uploader.component';


const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {path: 'upload', component: UploaderComponent},
  { path: 'homepage', component: HomepageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'content', component: PublicContentComponent},
  { path: '**', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'user', component: PublicContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
