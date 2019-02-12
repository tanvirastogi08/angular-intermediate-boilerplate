import { Model } from './model';
import { IEmployee  } from './employee';

export class Filters extends Model {
  public employee: IEmployee;

  constructor(data?: object) {
    super(data);
  }

  public static cast(data: object): Filters {
    return new Filters(data);
  }
}
