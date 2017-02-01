`frameworks-list.component.ts`;

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Frameworks } from '../stores/frameworks.store';

@Component({
  selector: 'app-frameworks-list',
  template: `
    <div layout="column" *mobxAutorun>
      <label>
        <input type="checkbox" class="md-checkbox red flex"
          [(ngModel)]="frameworks.isAllChecked"
          [disabled]="!frameworks.filteredItems.length"
          [indeterminate]="!frameworks.filteredItems.length"/>
        {{ frameworks.isAllChecked === true ? 'Uncheck All' : 'Check All' }}
      </label>

      <label *ngFor="let item of frameworks.filteredItems">
        <input type="checkbox"
          class="red master-checkbox flex"
          [(ngModel)]="item.checked"/>
        {{ item.name }}
      </label>
    </div>
  `,
  styleUrls: ['./frameworks-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameworksListComponent {

  constructor(private frameworks: Frameworks) { }

}
