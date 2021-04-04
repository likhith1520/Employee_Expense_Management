import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ManagerHomePageComponent } from './manager-home-page/manager-home-page.component';
import { IndividualDetailsComponent } from './individual-details/individual-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoggedInComponent,
    AddExpensesComponent,
    AdminHomePageComponent,
    ManagerHomePageComponent,
    IndividualDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
