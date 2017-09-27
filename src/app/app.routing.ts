import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';


const appRoutes: Routes = [
  {
    path: '',
    component: UserFormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
