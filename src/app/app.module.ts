import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pageComponents/home/home.component';
import { ServicesComponent } from './pageComponents/services/services.component';
import { ContactComponent } from './pageComponents/contact/contact.component';
import { ImprintComponent } from './pageComponents/imprint/imprint.component';
import { CompanyComponent } from './pageComponents/company/company.component';
import { FormularComponent } from './components/formular/formular.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RecaptchaComponent } from './components/recaptcha/recaptcha.component';
import { CookieDialogComponent } from './components/cookie-dialog/cookie-dialog.component';
import { PrivacyStatementComponent } from './pageComponents/privacy-statement/privacy-statement.component';
import { ConditionsComponent } from './pageComponents/conditions/conditions.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    ImprintComponent,
    CompanyComponent,
    FormularComponent,
    RecaptchaComponent,
    CookieDialogComponent,
    PrivacyStatementComponent,
    ConditionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
