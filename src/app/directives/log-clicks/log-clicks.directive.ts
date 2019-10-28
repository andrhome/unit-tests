import { Directive, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogClicks]'
})
export class LogClicksDirective {
  @Output() changes = new EventEmitter<number>();
  private counter = 0;

  @HostListener('click') onClick() {
    this.counter++;
    this.changes.emit(this.counter);
  }
}
