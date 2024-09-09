import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-status-summary',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  // Define data structures for the different sections
  page: any;
  status: any;
  components: any[] = [];
  incidents: any[] = [];
  scheduledMaintenances: any[] = [];

  // Define the columns for each section
  displayedColumnsComponents: string[] = ['name', 'description', 'status'];
  displayedColumnsIncidents: string[] = ['id', 'name', 'impact', 'status'];
  displayedColumnsMaintenances: string[] = ['id', 'name', 'impact', 'status'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('https://status.controlup.com/api/v2/summary.json')
      .subscribe(response => {
        this.page = response.page;
        this.status = response.status;
        this.components = response.components;
        this.incidents = response.incidents;
        this.scheduledMaintenances = response.scheduled_maintenances;
      });
  }
}
