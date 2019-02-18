import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ILoader {
  isLoading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public loader: ILoader = { isLoading: false };
  public loaderEvent = new Subject();

  constructor() { }

  public showLoader() {
      this.loader.isLoading = true;
      this.loaderEvent.next(true);
  }

  public hideLoader() {
      this.loader.isLoading = false;
      this.loaderEvent.next(false);
  }
}
