import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  public title: string = 'Employee Detail Page: ';

  constructor(private _route: ActivatedRoute) {
    // can be used to fetch id from the route
    // this.route.snapshot.paramMap.get('id');
  }

  public ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    this.title += id;
  }

}
