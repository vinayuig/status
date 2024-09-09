import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OverviewComponent } from './home/overview/overview.component';
import { UpdatesComponent } from './home/updates/updates.component';
import { TeamComponent } from './about/team/team.component';
import { HistoryComponent } from './about/history/history.component';
import { EmailComponent } from './contact/email/email.component';
import { PhoneComponent } from './contact/phone/phone.component';
import { IncidentsComponent } from './home/incidents/incidents.component';
import { ScheMaintenaceComponent } from './home/sche-maintenace/sche-maintenace.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    OverviewComponent,
    UpdatesComponent,
    TeamComponent,
    HistoryComponent,
    EmailComponent,
    PhoneComponent,
    IncidentsComponent,
    ScheMaintenaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
