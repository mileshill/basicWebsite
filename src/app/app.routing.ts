import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactFormComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);