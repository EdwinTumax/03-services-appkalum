import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../login/usuario.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  endPoint = environment.baseUrlAuth;

  constructor(private httpClient: HttpClient) { }

  create(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(`${this.endPoint}/Cuentas/Crear`,usuario);
  }

}
