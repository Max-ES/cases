import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pageComponents/home/home.component';
import { ServicesComponent } from './pageComponents/services/services.component';
import { ContactComponent } from './pageComponents/contact/contact.component';
import { ImprintComponent } from './pageComponents/imprint/imprint.component';
import { CompanyComponent } from './pageComponents/company/company.component';
import { PrivacyStatementComponent } from './pageComponents/privacy-statement/privacy-statement.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'privacy-statement', component: PrivacyStatementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
