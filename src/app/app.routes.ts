import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';
import { MediaComponent } from './media/media.component';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch:'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'media', component: MediaComponent}

];
