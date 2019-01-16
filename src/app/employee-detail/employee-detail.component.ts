import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public title: string = 'Employee Detail Page: ';
  constructor(private _route: ActivatedRoute) {
    // this.route.snapshot.paramMap.get('id');
   }

  public ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    this.title += id;
  }

}
