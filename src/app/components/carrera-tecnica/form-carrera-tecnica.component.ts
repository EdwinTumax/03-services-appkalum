import { Component, OnInit } from '@angular/core';
import { CarreraTecnicaService } from './carrera-tecnica.service';
import { CarreraTecnica } from './carrera-tecnica.model';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-carrera-tecnica',
  templateUrl: './form-carrera-tecnica.component.html',
  styles: [
  ]
})
export class FormCarreraTecnicaComponent implements OnInit {

  carreraTecnica: CarreraTecnica = new CarreraTecnica();

  titulo: string;

  constructor(private carreraTecnicaService: CarreraTecnicaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const carreraId = params.get('id');
      if(carreraId) {
        this.titulo = 'Editar';
        this.carreraTecnicaService.getCarreraTecnica(carreraId).subscribe((response) => {
          this.carreraTecnica = response;
        })
      } else {
        this.titulo = 'Nuevo';
      }
    });  
  }

  guardar() : void {
    this.carreraTecnicaService.postCarreraTecnica(this.carreraTecnica).subscribe(response => {
       const mensaje = `La carrera ${response.nombre} se ha creado con exito!!!`; 
       Swal.fire({icon: 'success',
       title: 'Carreras técncias',
       text: mensaje}).then(result => {
          this.router.navigate(['/carreraTecnica']);
       });
    },
    e => {
      Swal.fire({icon: 'error', title: 'Carreras técnicas', text: e});
    })
  }

  actualizar(): void {
    this.carreraTecnicaService.putCarreraTecnica(this.carreraTecnica).subscribe(
      response => {
        const mensaje = `La carrera ${this.carreraTecnica.nombre} se ha actualizado con exito!!!`; 
        Swal.fire({icon: 'success',
        title: 'Carreras técncias',
        text: mensaje}).then(result => {
           this.router.navigate(['/carreraTecnica']);
        });
      },
      e => {
        console.log(e);
        Swal.fire({icon: 'error', title: 'Carreras técnicas', text: e});
      } 
    )
  }

}
