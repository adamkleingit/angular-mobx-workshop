import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Frameworks } from '../stores/frameworks.store';

@Component({
  selector: 'app-selected-frameworks',
  templateUrl: './selected-frameworks.component.html',
  styleUrls: ['./selected-frameworks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedFrameworksComponent {

  constructor(private frameworks: Frameworks) { }
}
