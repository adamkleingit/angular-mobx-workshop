`app.component.ts`;
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main>
      <app-selected-frameworks></app-selected-frameworks>
      <div layout="column">
        <app-frameworks-filter></app-frameworks-filter>
        <app-new-framework></app-new-framework>
      </div>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
