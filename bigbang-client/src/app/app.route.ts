import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatComponent } from "./stat/stat.component"
import { UserFormComponent} from "./user-form/user-form.component"
import { CheckinComponent } from "./checkin/checkin.component"
//test
const appRoutes: Routes = [
  {
    path:'',
    redirectTo:'/stat',
    pathMatch:'full'
  },
  {
    path: 'stat',
    component: StatComponent
  },
  {
    path: 'form',
    component: UserFormComponent
  },
  {
    path: 'checkin',
    component: CheckinComponent
  }

//PaymentsListComponent
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
