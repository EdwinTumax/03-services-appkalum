import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario.model';
import { UsuarioService } from '../usuario/usuario.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-user-register',
  templateUrl: './form-user-register.component.html',
  styles: [
  ]
})
export class FormUserRegisterComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private UsuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.usuario.roles.push('ROLE_USER');
    this.UsuarioService.create(this.usuario).subscribe(response => {
      let mensaje = `El usuario ${response.username} ha sido creado con éxito!!`;
      swal.fire('Registro',mensaje, 'success').then(respuesta => {
        if(respuesta.isConfirmed){
          this.router.navigate(['/carreraTecnica']);
        }
      });

    });
  }

}
