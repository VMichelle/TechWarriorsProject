import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { PublicContentComponent } from './public-content/public-content.component';
import { PublicCommentsComponent } from './public-comments/public-comments.component';
import { PrivateNotesComponent } from './private-notes/private-notes.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    AboutComponent,
    RegistrationComponent,
    PublicContentComponent,
    PublicCommentsComponent,
    PrivateNotesComponent,
    LoginComponent,
    UploadComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
