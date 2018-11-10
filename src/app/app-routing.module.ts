import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './shared/components/landingpage/landingpage.component';
import { UserPageComponent } from './shared/components/userpage/userpage.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'user/:username', component: UserPageComponent },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
