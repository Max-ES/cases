import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormularService } from '../../services/formular.service';
import { CookieService } from 'src/app/services/cookie.service';
import { DialogService } from 'src/app/services/dialog.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.sass']
})
export class FormularComponent implements OnInit {
  @ViewChild('email') private emailInput: ElementRef;
  @ViewChild('name') private nameInput: ElementRef;
  @ViewChild('message') private messageInput: ElementRef;
  @ViewChild('checkbox') private checkboxInput: ElementRef;

  submitEventSubject: Subject<void> = new Subject<void>();

  loading = false;

  errorOccured = false;
  errorMessage = 'Ein Fehler ist aufgetreten.';
  sentFormular = false;
  successMessage = 'Sie haben uns erfolgreich kontaktiert. In Kürze erhalten Sie eine Bestätigungsmail von uns.';

  captchaKey = '';

  constructor(
    private formularService: FormularService,
    private cookieService: CookieService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.resetMessages();
    const email = this.emailInput.nativeElement.value.trim();
    const name = this.nameInput.nativeElement.value.trim();
    const message = this.messageInput.nativeElement.value.trim();
    const checked = this.checkboxInput.nativeElement.checked;
    if (this.areValid(email, name, message, checked)){
      this.submitEventSubject.next();
      this.formularService.sendFormular(name, email, message, this.captchaKey).subscribe(result => {
        this.onSuccess();
      }, error => {
        console.log(error);
        this.onHttpError();
      });
    }
  }

  areValid(mail: string, name: string, message: string, checked: boolean): boolean {
    if (mail.length === 0) {
      this.raiseError('Bitte geben Sie Ihre E-Mail-Adresse ein.');
      return false;
    }
    else if (name.length === 0) {
      this.raiseError('Bitte geben Sie Ihren Namen ein.');
      return false;
    }
    else if (message.length === 0) {
      this.raiseError('Bitte geben Sie eine Nachricht ein.');
      return false;
    }
    else if (this.cookieService.getCookieConsent() === false) {
      this.dialogService.openCookieDialog();
      this.loading = false;
      return false;
    }
    else if (this.captchaKey.length === 0) {
      this.raiseError('Bitte lösen Sie das Captcha. Falls kein Captcha angezeigt wird, überprüfen Sie Ihre Internetverbindung.');
      return false;
    }
    else if (!checked) {
      this.raiseError('Bitte stimmen Sie der Datenverarbeitung zu.');
      return false;
    }
    return true;
  }

  resetMessages() {
    this.loading = true;
    this.errorMessage = '';
    this.errorOccured = false;
    this.sentFormular = false;
  }

  raiseError(message: string) {
    this.loading = false;
    this.errorOccured = true;
    this.errorMessage = message;
  }

  onHttpError() {
    this.raiseError('Kontaktformular konnte nicht versendet werden. Überprüfen Sie Ihre Angaben oder versuchen Sie es später erneut.');
    this.captchaKey = '';
  }

  onSuccess() {
    this.loading = false;
    this.sentFormular = true;
    this.emailInput.nativeElement.value = '';
    this.nameInput.nativeElement.value = '';
    this.messageInput.nativeElement.value = '';
    this.checkboxInput.nativeElement.checked = false;
    this.captchaKey = '';
  }

  onCaptchaSolved(key: string) {
    this.captchaKey = key;
  }

}
