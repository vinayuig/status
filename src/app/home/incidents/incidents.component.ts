import { Component, OnInit } from '@angular/core';
import { Incident } from './incidents.model';
import { incidentsService } from './incidents.service';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {
  incidents: Incident[] = [];
  displayedColumns: string[] = ['id', 'name', 'impact', 'status', 'updates'];

  constructor(private dataService: incidentsService) { }

  ngOnInit(): void {
    this.dataService.getIncidents().subscribe(response => {
      this.incidents = response.incidents;
    });
  }
}