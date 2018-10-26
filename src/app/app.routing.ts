import {RouterModule, Routes} from '@angular/router';
import {SOSWorkersComponent} from './components/sosworkers/sosworkers.component';


const MAINMENU_ROUTES: Routes = [
  { path: '', component: SOSWorkersComponent },
  { path: 'workers', component: SOSWorkersComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
