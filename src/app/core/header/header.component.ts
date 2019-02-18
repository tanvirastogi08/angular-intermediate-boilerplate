import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck  {

  public isShowHomeTab: boolean = true;

  constructor(private router: Router) { }

  public ngOnInit() {
  }

  public ngDoCheck() {
    if (this.router.url === '/' || this.router.url === '/home') {
      this.isShowHomeTab = false;
    } else {
      this.isShowHomeTab = true;
    }
  }

  public onClickLogout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

}
