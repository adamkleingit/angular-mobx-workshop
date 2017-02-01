`frameworks-filter.component.ts`;

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Frameworks } from '../stores/frameworks.store';

@Component({
  selector: 'app-frameworks-filter',
  template: `
    <div *mobxAutorun>
      <md-input placeholder="filter frameworks" [(ngModel)]="frameworks.filter">
      </md-input>
      <app-frameworks-list></app-frameworks-list>
    </div>
  `,
  styleUrls: ['./frameworks-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameworksFilterComponent {
  constructor(private frameworks: Frameworks) { }

}
