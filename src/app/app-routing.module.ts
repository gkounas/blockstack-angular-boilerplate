import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'landing', pathMatch: 'full'
    },
    {
        path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule',
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
            } // rem: set tracing to false before going to prod
            // useHash <-- avoiding HashLocationStrategy, LocationStrategy
            // enableTracing <-- debugging purposes only
        )
    ],
    declarations: []
})
export class AppRoutingModule { }
