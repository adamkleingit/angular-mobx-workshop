import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Frameworks } from '../stores/frameworks.store';

@Component({
  selector: 'app-frameworks-list',
  templateUrl: './frameworks-list.component.html',
  styleUrls: ['./frameworks-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameworksListComponent {

  constructor(private frameworks: Frameworks) { }

}
