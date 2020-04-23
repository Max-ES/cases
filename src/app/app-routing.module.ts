import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ImprintComponent } from './imprint/imprint.component';
import { CompanyComponent } from './company/company.component';


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
