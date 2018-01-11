import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  starWidth: number = 4;
  @Input() rating: number;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }

  onClick(): void {
    this.notify.emit(` this rating ${this.rating} was clicked!`);
  }
}
