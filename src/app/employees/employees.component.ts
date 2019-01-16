import {
  Component,
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ContentChild
} from '@angular/core';
import { IEmployee } from '../shared/models/employee';
import { CsatComponent } from '../shared/components/csat/csat.component';
import { EmployeeService } from '../core/services/employee.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {

  @ContentChild(CsatComponent) public contentOfCsat: CsatComponent;
  @ViewChild(CsatComponent) public viewCsat: CsatComponent;

  private subscription: Subscription = new Subscription();
  public errorMessage: string;

  public pageTitle: string = 'Employee List';
  public imageWidth: number = 50;
  public imageMargin: number = 2;
  public showImage: boolean = true;

  public message: string = '';
  private prevMessage: string = '';

  public filteredEmployee: IEmployee[] = [];

  private _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredEmployee = this.listFilter ?
      this.performFilter(this.listFilter) : this.employees;
  }
  public employees: Array<IEmployee> = [];

  constructor(private employeeService: EmployeeService) {
    this._listFilter = 'Designation';
    console.log('In Employee constructor');
  }

  public ngOnChanges() {
    console.log('In Employee ngOnChanges');
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
    console.log('In Employee ngOnInit', this.employees);
  }

  public ngAfterContentInit() {
    console.log('Employee ngAfterContentInit fired!!!!!');
    // this.doSomething();
  }

  public ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    // if (this.prevMessage === this.contentOfCsat.showStar) {
    //   console.log('AfterContentChecked (no change)');
    // } else {
    //   this.prevMessage = this.contentOfCsat.showStar;
    //   console.log('AfterContentChecked');
    //   this.doSomething();
    // }
  }

  public ngAfterViewInit() {
    console.log('In Employee ngAfterViewInit');
    // this.viewCsat.displayCsat();
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('Employee component destroyed');
  }

  public toggleImage() {
    this.showImage = !this.showImage;
  }

  private performFilter(filterBy: string): IEmployee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.employees.filter((emp: IEmployee) =>
      emp.designation.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  public onRatingClicked(message: string) {
    // TODO: console the message to show!
    console.log('message', message);
  }

  private doSomething() {
    this.message = this.contentOfCsat ?
      `The CSAT is ${this.contentOfCsat.showStar}` : 'Not Yet Initialized';
  }

}
