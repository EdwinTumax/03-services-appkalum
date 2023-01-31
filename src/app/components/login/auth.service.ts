import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endPoint = environment.baseUrlAuth;
  rolesEndPoint = environment.roles;

  private _usuario: Usuario;
  private _token: string;

  constructor(private httpClient: HttpClient) { }

  login(usuario: Usuario): Observable<any> {
    console.log(usuario);
    const httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    console.log(httpHeaders);
    console.log(`${this.endPoint}/Cuentas/Login`);
    return this.httpClient.post(`${this.endPoint}/Cuentas/Login`,usuario,{ headers: httpHeaders });     
  }

  public get token(): any {
    if(this._token != null){
      return this._token;
    }else if(this._token == null && sessionStorage.getItem('token') != null){
      this._token = JSON.stringify(sessionStorage.getItem('token') as string);
      return this._token;
    }
    return null;
  }

  public get usuario(): Usuario {
    if(this._usuario != null) {
      return this._usuario;
    } else if(this._usuario == null && sessionStorage.getItem('usuario') != null){
      this._usuario = JSON.parse(sessionStorage.getItem('usuario') as string) as Usuario;
      return this._usuario;
    }
    return new Usuario();
  }
  
  getToken(token: string) : any {
    if(token != null){
      return JSON.parse(atob(token.split('.')[1]));
    }
    return null;
  }

  saveToken(token: string): void {
    this._token = token;
    sessionStorage.setItem('token',token);
  }

  saveUser(payload: any): void {
    this._usuario = new Usuario();
    this._usuario.email = payload.email;
    this._usuario.username = payload.username;
    this._usuario.roles = payload[this.rolesEndPoint]
    sessionStorage.setItem('usuario',JSON.stringify(this._usuario));
  }

  logout(): void {
    this._token = "";
    this._usuario == null;
    sessionStorage.clear();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
  }

  isAuthenticated(): boolean {
    let payload = this.getToken(this.token);
    console.log(payload);
    if(payload != null && payload.unique_name && payload.unique_name.length > 0){
      return true;
    }
    return false;
  }

  hasRole(role: string): boolean {
    if(this.usuario.roles.includes(role)){
      return true;
    }
    return false;
  }




}
