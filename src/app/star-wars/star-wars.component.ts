import { Component, OnInit } from '@angular/core';
import { StarWarsService } from './star-wars.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css'],
})
export class StarWarsComponent implements OnInit {
  people: any[] = [];

  constructor(private starWarsService: StarWarsService) {}

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.starWarsService.getPeople().subscribe((data: any) => {
      this.people = data.results;
    });
  }
}
