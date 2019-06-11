import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGenericService } from './services/auth-generic.service';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PublicContentComponent } from './public-content/public-content.component';
<<<<<<< HEAD
import { ViewContentComponent } from './view-content/view-content.component';
=======
import { UploaderComponent } from './uploader/uploader.component';

>>>>>>> 8d0854a5743296f188b55f45d9f3d732e388eb50

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {path: 'upload', component: UploaderComponent},
  { path: 'homepage', component: HomepageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'testimonial', component: TestimonialComponent},
  { path: 'content', component: PublicContentComponent},
<<<<<<< HEAD
  { path: '**', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'user', component: PublicContentComponent},
  { path: 'details/:id', component: ViewContentComponent } // resolve:{data : EditContentResolver}
=======
  { path: 'user', component: PublicContentComponent},
  { path: '**', redirectTo: '/homepage', pathMatch: 'full' }
>>>>>>> 8d0854a5743296f188b55f45d9f3d732e388eb50
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
