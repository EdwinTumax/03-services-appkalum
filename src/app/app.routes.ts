import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './components/home/home.component';
import { CarreraTecnicaComponent } from './components/carrera-tecnica/carrera-tecnica.component';
import { FormCarreraTecnicaComponent} from './components/carrera-tecnica/form-carrera-tecnica.component';
import { InscripcionComponent} from './components/inscripcion/inscripcion.component';
import { LoginComponent } from './components/login/login.component';
import { FormUserRegisterComponent } from './components/login/form-user-register.component';
import { ExamenAdmisionComponent } from './components/examen-admision/examen-admision.component';
import { AuthGuard } from './components/login/guards/auth.guard';
import { RoleGuard } from './components/login/guards/role.guard';
import { FormAspiranteComponent } from './components/aspirante/form-aspirante.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'examenAdmision', component: ExamenAdmisionComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_ADMIN'} },
    { path: 'carreraTecnica', component: CarreraTecnicaComponent},
    { path: 'carreraTecnica/page/:page', component: CarreraTecnicaComponent},
    { path: 'inscripcion', component: InscripcionComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_USER'}},
    { path: 'login', component: LoginComponent},
    { path: 'usuario/form', component: FormUserRegisterComponent},
    { path: 'carreraTecnica/form', component: FormCarreraTecnicaComponent},    
    { path: 'carreraTecnica/form/:id', component: FormCarreraTecnicaComponent},    
    { path: 'aspirante/form', component: FormAspiranteComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ROLE_USER'}},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

