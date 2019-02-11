import {
  Component,
  OnInit,
  OnDestroy,
  ContentChild
} from '@angular/core';
import { IEmployee } from '../shared/models/employee';
import { CsatComponent } from '../shared/components/csat/csat.component';
import { EmployeeService } from '../core/services/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnDestroy {

  @ContentChild(CsatComponent) public contentOfCsat: CsatComponent;

  public errorMessage: string;
  public pageTitle: string = 'Employee List';
  public showImage: boolean = true;
  public message: string = '';
  public employees: Array<IEmployee> = [];
  public filteredEmployee: IEmployee[] = [];

  private _listFilter: string;
  private subscription: Subscription = new Subscription();

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredEmployee = this.listFilter ?
      this.performFilter(this.listFilter) : this.employees;
  }

  constructor(private employeeService: EmployeeService) {
    this._listFilter = 'Designation';
  }

  public ngOnInit() {
    this.subscription.add(
      this.employeeService.getEmployees()
        .subscribe(
          emp => {
            this.employees = emp;
            this.filteredEmployee = this.employees;
          },
          error => this.errorMessage = error)
    );
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public toggleImage() {
    this.showImage = !this.showImage;
  }

  private performFilter(filterBy: string): IEmployee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.employees.filter((emp: IEmployee) =>
      emp.designation.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  private onRatingClicked() {
    this.message = this.contentOfCsat ?
      `The CSAT is ${this.contentOfCsat.showStar}` : 'Not Yet Initialized';
  }

}
