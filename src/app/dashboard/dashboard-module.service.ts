import { BehaviorSubject , Observable } from 'rxjs';

import { IEmployee } from '@employee-portal-models/index';

/* For interaction within component */
export class DasboardModuleService {

  private employee: BehaviorSubject<IEmployee[]> =
    new BehaviorSubject<IEmployee[]>(null);
  public currentEmployee: Observable<IEmployee[]>
    = this.employee.asObservable();

  public setEmployee(employee: IEmployee[]): DasboardModuleService {
    this.employee.next(employee);
    return this;
  }

}
