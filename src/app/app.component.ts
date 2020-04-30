import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'CASES GmbH';
  public isMenuCollapsed = true;

  logoClickCount = 0;
  year = (new Date()).getFullYear();

  logoClicked() {
    this.logoClickCount++;
  }

}
