import {Component, OnInit} from '@angular/core';
import {Github} from './models/github.model';
import {GithubdataService} from './githubdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  githubs$: Github[];
  private ImageFormatterComponent: any;

  constructor(private githubService: GithubdataService) {}

  columnDefs = [
    {headerName: 'ID', field: 'id', width: 80, sortable: true},
    {headerName: 'Name', field: 'name', sortable: true},
    {headerName: 'Owner', field: 'owner.login', sortable: true},
    {headerName: 'Owner URL', field: 'owner.url', sortable: true},
    {headerName: 'html url', field: 'html_url', sortable: true, filter: true},
    {headerName: 'Description', field: 'description', sortable: true}
  ];

  ngOnInit() {
    return this.githubService.getGithubs()
      .subscribe(data => this.githubs$ = data);
  }
}
