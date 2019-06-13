import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGenericService } from './services/auth-generic.service';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PublicContentComponent } from './public-content/public-content.component';
import { ViewContentComponent } from './view-content/view-content.component';
import { UploaderComponent } from './uploader/uploader.component';
// import { ViewContentResolver } from './view-content/view-content.resolver';

const routes: Routes = [
  // { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'uploader',  component: UploaderComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'testimonial', component: TestimonialComponent},
  { path: 'content', component: PublicContentComponent},
  // { path: '**', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'user', component: PublicContentComponent},
  { path: 'details/:id', component: ViewContentComponent  }, //resolve:{data : ViewContentResolver}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
