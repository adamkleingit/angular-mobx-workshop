import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <h2>Angular MobX demo</h2>
    </div>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
