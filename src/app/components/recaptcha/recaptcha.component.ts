import { Component, OnInit, ElementRef, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';
import { DialogService } from 'src/app/services/dialog.service';
import { Observable } from 'rxjs/internal/Observable';

declare global {
  interface Window {
    grecaptcha: any;
    grecaptchaCallback: any;
  }
}

@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.sass']
})

export class RecaptchaComponent implements OnInit {

  @Input() siteKey: string;
  @Input() resetEvent: Observable<void>;
  @ViewChild('recaptcha', {static: true }) recaptchaElement: ElementRef;

  @Output() solved = new EventEmitter();

  scriptLoaded = false;

  constructor(
    private cookieService: CookieService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.cookieService.cookieConsent.subscribe((value) => {
      if (value && !this.scriptLoaded) {
        this.addRecaptchaScript();
        this.scriptLoaded = true;
      }
    });
    this.resetEvent.subscribe(() => {
      this.resetRecaptcha();
    });
    this.cookieService.getCookieConsent();
  }

  renderReCaptch() {
    window.grecaptcha.render(this.recaptchaElement.nativeElement, {
      sitekey : this.siteKey,
      callback: (response: string) => {
        this.solved.emit(response);
      }
    });
  }

  addRecaptchaScript() {

    window.grecaptchaCallback = () => {
      this.renderReCaptch();
    };

    // tslint:disable-next-line: only-arrow-functions
    (function(d, s, id, obj){
      const fjs = d.getElementsByTagName(s)[0];
      let js: any;
      if (d.getElementById(id)) { obj.renderReCaptch(); return; }
      js = d.createElement(s); js.id = id;
      js.src = 'https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));

  }

  resetRecaptcha() {
    window.grecaptcha.reset();
  }
}
