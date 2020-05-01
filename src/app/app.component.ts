import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'CASES GmbH';
  public isMenuCollapsed = true;
  scrolledUp = true;

  logoClickCount = 0;
  year = (new Date()).getFullYear();

  logoClicked() {
    this.logoClickCount++;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (document.documentElement.scrollTop <= 50) {
      this.scrolledUp = true;
    } else if (document.documentElement.scrollTop > 100) {
      this.scrolledUp = false;
    }
  }

}
