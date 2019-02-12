import { BehaviorSubject , Observable } from 'rxjs';

import { IEmployee, Filters } from '@employee-portal-models/index';

/* For interaction within component */
export class AppModuleService {

  private employee: BehaviorSubject<IEmployee[]> =
    new BehaviorSubject<IEmployee[]>(null);
  public currentEmployee: Observable<IEmployee[]>
    = this.employee.asObservable();

  private isEmployeeLoading: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(null);
  public currentIsEmployeeLoading: Observable<boolean> =
    this.isEmployeeLoading.asObservable();

  private selectedFilters: BehaviorSubject<Filters> =
    new BehaviorSubject<Filters>(null);
  public currentSelectedFilters: Observable<Filters> =
    this.selectedFilters.asObservable();

  public setEmployee(employee: IEmployee[]): AppModuleService {
    this.employee.next(employee);
    return this;
  }

  public setIsEmployeeLoading(
    isLoading: boolean
  ): AppModuleService {
    this.isEmployeeLoading.next(isLoading);
    return this;
  }

  public setFilters(
    filters: Filters
  ): AppModuleService {
    this.selectedFilters.next(filters);
    return this;
  }
}
