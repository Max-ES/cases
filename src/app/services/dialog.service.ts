import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieDialogComponent } from '../components/cookie-dialog/cookie-dialog.component';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private modalService: NgbModal, private cookieService: CookieService) { }

  openCookieDialog() {
    this.modalService.open(CookieDialogComponent).result.then((result: boolean) => {
      if (result === true) {
        this.cookieService.setCookieConsent(true);
      }
    }, () => {});
  }
}
