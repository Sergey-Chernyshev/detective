import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutServiceComponent} from "./pages/about-service/about-service.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {LayoutComponent} from "./components/layout/layout.component";
import {LoginComponent} from "./pages/login/login.component";
import {authGuard} from "./guard/auth.guard";

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children:[
      {path: '', component: HomeComponent},
      {path:'aboutservice', component: AboutServiceComponent}
    ]
  },
  {
    path: 'admin', component: AdminComponent, canActivate: [authGuard]
  },
  {
    path: 'login', component: LoginComponent
  }
];
