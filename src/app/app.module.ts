import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { NewsListComponent } from './news-list/news-list.component';
import { MembersComponent } from './members/members.component';
import { SupportUsComponent } from './support-us/support-us.component';
import { CurrentSponsorsComponent } from './current-sponsors/current-sponsors.component';
import { FtcComponent } from './ftc/ftc.component';
import { EventOutreachComponent } from './event-outreach/event-outreach.component';
import { EventGeneralComponent } from './event-general/event-general.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { TeamGalleryComponent } from './team-gallery/team-gallery.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactComponent,
    NewsArticleComponent,
    NewsListComponent,
    MembersComponent,
    SupportUsComponent,
    CurrentSponsorsComponent,
    FtcComponent,
    EventOutreachComponent,
    EventGeneralComponent,
    TeamMembersComponent,
    TeamGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
