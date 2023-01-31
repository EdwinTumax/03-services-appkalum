import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CarreraTecnicaComponent } from './components/carrera-tecnica/carrera-tecnica.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { APP_ROUTING } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import { HomeService } from './components/home/home.service';
import { PaginadorComponent } from './components/paginador/paginador.component';
import { FormCarreraTecnicaComponent } from './components/carrera-tecnica/form-carrera-tecnica.component';
import { FormUserRegisterComponent } from './components/login/form-user-register.component';
import { ExamenAdmisionComponent } from './components/examen-admision/examen-admision.component';
import { TokenInterceptor } from './components/interceptors/token.interceptor';
import { AspiranteComponent } from './components/aspirante/aspirante.component';
import { FormAspiranteComponent } from './components/aspirante/form-aspirante.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarreraTecnicaComponent,
    InscripcionComponent,
    LoginComponent,
    PaginadorComponent,
    FormCarreraTecnicaComponent,
    FormUserRegisterComponent,
    ExamenAdmisionComponent,
    AspiranteComponent,
    FormAspiranteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [HomeService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
