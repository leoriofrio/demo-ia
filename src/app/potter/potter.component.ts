import { Component, OnInit } from '@angular/core';
import { PotterService } from './potter.service';

@Component({
  selector: 'app-potter',
  templateUrl: './potter.component.html',
  styleUrls: ['./potter.component.scss'],
})
export class PotterComponent implements OnInit {
  potterList: any[] = [];

  constructor(private potterService: PotterService) {}

  ngOnInit(): void {
    this.getPotterList();
  }

  getPotterList(): void {
    this.potterService.getStaffCharacters().subscribe((data) => {
      console.log(data);
      this.potterList = data;
    });
  }
}
