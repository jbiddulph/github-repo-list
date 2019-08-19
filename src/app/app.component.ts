import {Component, OnInit} from '@angular/core';
import {Accident} from './models/accident.model';
import {AccidentdataService} from './accidentdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  accidents$: Accident[];

  constructor(private accidentService: AccidentdataService) {}

  columnDefs = [
    {headerName: 'ID', field: 'id', sortable: true},
    {headerName: 'Lat', field: 'lat', sortable: true},
    {headerName: 'Lon', field: 'lon', sortable: true},
    {headerName: 'Location', field: 'location', sortable: true, filter: true},
    {headerName: 'Date', field: 'date', sortable: true},
    {headerName: 'Severity', field: 'severity', sortable: true, filter: true},
    {headerName: 'Borough', field: 'borough', sortable: true, filter: true }
  ];

  ngOnInit() {
    return this.accidentService.getAccidents()
      .subscribe(data => this.accidents$ = data);
  }
}
