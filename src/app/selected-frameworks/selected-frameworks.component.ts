`selected-frameworks.component.ts`;

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Frameworks } from '../stores/frameworks.store';

@Component({
  selector: 'app-selected-frameworks',
  template: `
    <div class="selected-frameworks" *mobxAutorun>
      <span *ngFor="let framework of frameworks.selectedItems"
            class="selected-framework">
        {{ framework.name }}
        <span class="remove-framework" (click)="framework.checked = false">x</span>
      </span>
    </div>
  `,
  styleUrls: ['./selected-frameworks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedFrameworksComponent {

  constructor(private frameworks: Frameworks) { }
}
