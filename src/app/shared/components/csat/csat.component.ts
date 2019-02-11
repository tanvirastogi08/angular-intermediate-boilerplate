import {
  Component,
  OnChanges,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-csat',
  templateUrl: './csat.component.html',
  styleUrls: ['./csat.component.scss']
})
export class CsatComponent implements OnChanges {

  @Input() public rating: number;
  @Output() public notifyRating: EventEmitter<string> = new EventEmitter<string>();

  public starWidth: number;
  public showStar: string = 'EPortal';

  constructor() { }

  public ngOnChanges() {
    this.starWidth = this.rating * 75 / 5;
  }

  public onClick() {
    this.notifyRating.emit(`CSAT score ${this.rating} is clicked!`);
  }

}
