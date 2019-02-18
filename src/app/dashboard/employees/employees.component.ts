import {
  Component,
  OnInit,
  OnDestroy,
  ContentChild,
} from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { DasboardModuleService } from '../dashboard-module.service';

import { IEmployee } from '@employee-portal-models/index';
import { EmployeeService, LoaderService, ILoader } from '@employee-portal-services/index';
import { CsatComponent } from '@employee-portal-shared/components/csat/csat.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnDestroy {

  @ContentChild(CsatComponent) public contentOfCsat: CsatComponent;

  public errorMessage: string;
  public loading: boolean;
  public pageTitle: string = 'Employee List';
  public showImage: boolean = true;
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

    this.loaderService.hideLoader();
  }

  constructor(private dashboardModuleService: DasboardModuleService,
              private loaderService: LoaderService,
              private employeeService: EmployeeService) {
    this._listFilter = 'Designation';
  }

  public ngOnInit() {
    /* 1. Try to add all the observables to subscriptions so that
        they could be easily destroyed when not in use
      2. Always use the middleware(here: DasboardModuleService) to access
        the data which could be shared among the components
    */
    this.subscription.add(
      this.dashboardModuleService.currentEmployee
        .subscribe(
          emp => {
            this.employees = emp;
            this.filteredEmployee = this.employees;
          },
          error => this.errorMessage = error
        )
    );
    this.subscription.add(this.load());
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private load(): Subscription {
    this.loaderService.showLoader();
    return this.loadEmployees()
      .subscribe(
        this.onFinish.bind(this),
        this.onError.bind(this)
      );
  }

  private loadEmployees(): Observable<IEmployee[]> {
    return this.employeeService.getEmployees()
      .pipe(
        map((emp: IEmployee[]) => {
          this.dashboardModuleService.setEmployee(emp);
          return emp;
        })
      );
  }

  public toggleImage() {
    this.showImage = !this.showImage;
  }

  private performFilter(filterBy: string): IEmployee[] {
    this.loaderService.showLoader();

    filterBy = filterBy.toLocaleLowerCase();
    return this.employees.filter((emp: IEmployee) =>
      emp.designation.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  private onFinish(): void {
    this.errorMessage = null;
    this.loaderService.hideLoader();
  }

  private onError(error): void {
    this.errorMessage = error;
    this.loaderService.hideLoader();
  }

}
