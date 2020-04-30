import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pageComponents/home/home.component';
import { ServicesComponent } from './pageComponents/services/services.component';
import { ContactComponent } from './pageComponents/contact/contact.component';
import { ImprintComponent } from './pageComponents/imprint/imprint.component';
import { CompanyComponent } from './pageComponents/company/company.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'imprint', component: ImprintComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
