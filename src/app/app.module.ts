import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { WeatherCardComponent } from './components/home/weather-card/weather-card.component';
import { UiService } from './services/ui/ui.service';
import { AddCardComponent } from './components/home/add-card/add-card.component';
import { AddComponent } from './components/add/add.component';
import { AngularFireLite, AngularFireLiteApp } from 'angularfire-lite';
import { AppGuard } from '../app/services/guards/app.guard';
import { AuthGuard } from '../app/services/guards/auth.guard';
import { FbService } from '../app/services/fb/fb.service';
import { AngularFireLiteFirestore, AngularFireLiteAuth} from 'angularfire-lite';
import { environment } from 'src/environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    HomeComponent,
    WeatherCardComponent,
    AddCardComponent,
    AddComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireLite.forRoot(environment.config),
  ],
  providers: [
    AppGuard,
    AuthGuard,
    FbService,
    AngularFireLiteAuth,
    AngularFireLiteFirestore,
    AngularFireLiteApp,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
