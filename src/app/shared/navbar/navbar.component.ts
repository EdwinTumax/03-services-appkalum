import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/login/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    let username = this.authService.usuario.username;
    this.authService.logout();
    Swal.fire({
      title: 'Logout', text: `${username}, has cerrado sesión con exito`, icon: 'success'
    });
    this.router.navigate(['/login']);
  }

}
