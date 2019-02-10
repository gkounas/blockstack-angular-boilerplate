import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';



export const routes: Routes = [
    {
        path: '', redirectTo: 'landing', pathMatch: 'full'
    },
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'landing', component: LandingComponent
    },
    {
        path: 'login', component: LoginComponent
    }
];

@NgModule({
    imports: [
        CommonModule,

        RouterModule.forRoot(
            routes,
            {
                useHash: false,
                enableTracing: false,
                preloadingStrategy: PreloadAllModules
            }
        )
    ],
    declarations: []
})
export class AppRoutingModule { }
