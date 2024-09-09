import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components here
import { OverviewComponent } from './home/overview/overview.component';
import { UpdatesComponent } from './home/updates/updates.component';
import { TeamComponent } from './about/team/team.component';
import { HistoryComponent } from './about/history/history.component';
import { EmailComponent } from './contact/email/email.component';
import { PhoneComponent } from './contact/phone/phone.component';
import { IncidentsComponent } from './home/incidents/incidents.component';
import { ScheMaintenaceComponent } from './home/sche-maintenace/sche-maintenace.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/overview', pathMatch: 'full' },
  { path: 'home/overview', component: OverviewComponent },
  { path: 'home/updates', component: UpdatesComponent },
  { path: 'home/incidents', component: IncidentsComponent },
  { path: 'home/sche-maintenace', component: ScheMaintenaceComponent },
  { path: 'about/team', component: TeamComponent },
  { path: 'about/history', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
