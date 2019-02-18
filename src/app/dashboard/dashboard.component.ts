import {
   Component,
   OnInit,
   DoCheck,
   OnDestroy,
   ChangeDetectorRef
} from '@angular/core';

import { LoaderService, ILoader } from '@employee-portal-services/index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, DoCheck, OnDestroy {

  public loader: ILoader;

  private subscription: Subscription = new Subscription();

  constructor(private cdRef: ChangeDetectorRef,
              private loaderService: LoaderService) { }

  public ngOnInit() {
    this.loader = this.loaderService.loader;
    this.loaderService.loaderEvent
      .subscribe((data: boolean) => this.loader.isLoading = data);
  }

  // Must Read: https://blog.angular-university.io/angular-debugging/
  public ngDoCheck() {
    this.cdRef.detectChanges();
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
