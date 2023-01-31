import { Component, OnInit } from '@angular/core';
import { CarreraTecnica } from '../carrera-tecnica/carrera-tecnica.model';
import { CarreraTecnicaService} from '../carrera-tecnica/carrera-tecnica.service';
import { ExamenAdmisionService } from '../examen-admision/examen-admision.service';
import { JornadaService } from '../jornada/jornada.service';
import { Jornada } from '../jornada/jornada.model';
import { ExamenAdmision } from '../examen-admision/examen-admision.model';
import { AuthService } from '../login/auth.service';
import { Usuario } from '../login/usuario.model';

@Component({
  selector: 'app-form-aspirante',
  templateUrl: './form-aspirante.component.html',
  styles: [
  ]
})
export class FormAspiranteComponent implements OnInit {
  carrerasTecnicas: any[] = [];
  jornadas: any[] = [];
  examenesAdmision: any[] = [];
  usuario: Usuario;
  
  constructor(private CarreraTecnicaService: CarreraTecnicaService, private jornadaService: JornadaService, 
    private examenAdmisionService: ExamenAdmisionService, private authService: AuthService) { 
      this.usuario = this.authService.usuario;
      console.log(this.usuario.email);
    }

  
  ngOnInit(): void {
    this.CarreraTecnicaService.getListaCarrerasTecnicas().subscribe(response => {
      this.carrerasTecnicas = response as CarreraTecnica[];      
    });

    this.jornadaService.getListaJornadas().subscribe(response => {
      this.jornadas = response as Jornada[];
    });

    this.examenAdmisionService.getListaExamenesAdmision(2022).subscribe(response => {
      this.examenesAdmision = response as ExamenAdmision[];
    })
    
  }

}
