`new-framework.component.ts`;

import { Component } from '@angular/core';
import { Frameworks } from '../stores/frameworks.store';

@Component({
  selector: 'app-new-framework',
  template: `
    <form autocomplete="off" (submit)="addNew()">
      <md-input placeholder="add new item" name="newItem"
        [(ngModel)]="newItem">
      </md-input>
    </form>
  `,
  styleUrls: ['./new-framework.component.css']
})
export class NewFrameworkComponent {
  private newItem = '';

  constructor(private frameworks: Frameworks) { }

  addNew() {
    this.frameworks.addNew(this.newItem);
    this.newItem = '';
  }
}
