import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpComponent } from './pages/home-page/sign-up/sign-up.component';

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'Kayıt', component: SignUpComponent}

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }