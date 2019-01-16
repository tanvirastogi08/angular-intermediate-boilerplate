import {
  Component,
  OnChanges,
  OnInit,
  AfterContentInit,
  AfterViewInit,
  OnDestroy,
  Input,
  EventEmitter,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-csat',
  templateUrl: './csat.component.html',
  styleUrls: ['./csat.component.css']
})
export class CsatComponent implements OnChanges, OnInit, AfterContentInit, AfterViewInit, OnDestroy {

  @Input() public rating: number;
  public starWidth: number;
  public showStar: string = 'tanvi';

  @Output() public notifyRating: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log('In CsatComponent constructor');
  }

  public ngOnChanges(changes: SimpleChanges) {
    this.starWidth = this.rating * 75 / 5;
    console.log('In CsatComponent ngOnChanges', changes);
  }
  public ngOnInit() {
    console.log('In CsatComponent ngOnInit');
  }

  public ngAfterContentInit() {
    console.log('In CsatComponent ngAfterContentInit');
  }

  public ngAfterViewInit() {
    console.log('In CsatComponent ngAfterViewInit');
  }

  public ngOnDestroy() {
    console.log('CsatComponent destroyed');
  }

  public onClick() {
    this.notifyRating.emit(`CSAT score ${this.rating} is clicked!`);
  }

  public displayCsat() {
    console.log('Called from parent component');
  }
}
