import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Frameworks } from '../stores/frameworks.store';

@Component({
  selector: 'app-frameworks-filter',
  templateUrl: './frameworks-filter.component.html',
  styleUrls: ['./frameworks-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameworksFilterComponent {
  constructor(private frameworks: Frameworks) { }

}
