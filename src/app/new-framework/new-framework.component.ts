import { Component } from '@angular/core';
import { Frameworks } from '../stores/frameworks.store';

@Component({
  selector: 'app-new-framework',
  templateUrl: './new-framework.component.html',
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
