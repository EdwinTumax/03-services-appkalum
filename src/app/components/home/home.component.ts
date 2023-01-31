import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  data: any[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.data = this.homeService.getPokemonList();
  }

}
