import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { SignupComponent } from './components/auth/signup/signup.component';
import { TrainingComponent } from './components/training/training/training.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CurrentTrainingComponent } from './components/training/current-training/current-training.component';
import { NewTrainingComponent } from './components/training/new-training/new-training.component';
import { PastTrainingsComponent } from './components/training/past-trainings/past-trainings.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { SidenavNavigationComponent } from './components/navigation/sidenav-navigation/sidenav-navigation.component';
import { HeaderNavigationComponent } from './components/navigation/header-navigation/header-navigation.component';
import { StopTrainingDialogComponent } from './components/training/stop-training-dialog/stop-training-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent,
    SidenavNavigationComponent,
    HeaderNavigationComponent,
    StopTrainingDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
