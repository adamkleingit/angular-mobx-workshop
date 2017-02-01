import { Component, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-change-detection-counter',
  template: `<span></span>`
})
export class ChangeDetectionCounterComponent {
  counter = 0;

  constructor(private elementRef:ElementRef, private zone: NgZone) { }

  ngAfterViewChecked() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.elementRef.nativeElement.innerHTML = `<span class="change-detection-counter">${this.counter++}</span>`;
      });
    });
  }

}
