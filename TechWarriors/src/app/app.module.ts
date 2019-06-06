import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth'

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

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegServiceService } from './services/reg-service.service';
import { environment } from '../environments/environment';



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
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [RegServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
