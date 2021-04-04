import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpensesComponent } from './add-expenses/add-expenses.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { IndividualDetailsComponent } from './individual-details/individual-details.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { LoginComponent } from './login/login.component';
import { ManagerHomePageComponent } from './manager-home-page/manager-home-page.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
 {path:'',redirectTo:'login',pathMatch:'full'},
 {path:'login',component:LoginComponent},
 {path:'register',component:RegisterComponent},
 {path:'user',component:LoggedInComponent},
 {path:'user/expenses',component:AddExpensesComponent},
 {path:'user/logout',redirectTo:'login'},
 {path:'user/home',component:LoggedInComponent},
 {path:'adminHome',component:AdminHomePageComponent},
 {path:'managerHome',component:ManagerHomePageComponent},
 {path:'userdetails',component:IndividualDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
