import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/login/login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/login-component', pathMatch: 'full' },
  { path: 'login-component', component: LoginComponent },
  { path: 'main-component', component: MainComponent },
  { path: 'app-component', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
