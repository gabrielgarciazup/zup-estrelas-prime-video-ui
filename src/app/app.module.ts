import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavLogoComponent } from './navbar/nav-logo/nav-logo.component';
import { NavPrimaryComponent } from './navbar/nav-primary/nav-primary.component';
import { NavLinksComponent } from './navbar/nav-primary/nav-links/nav-links.component';
import { NavSearchComponent } from './navbar/nav-primary/nav-search/nav-search.component';
import { NavProfileComponent } from './navbar/nav-primary/nav-profile/nav-profile.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import { VideoCatalogueComponent } from './video-section/video-catalogue/video-catalogue.component';
import { VideoComponent } from './video-section/video-catalogue/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavLogoComponent,
    NavPrimaryComponent,
    NavLinksComponent,
    NavSearchComponent,
    NavProfileComponent,
    VideoSectionComponent,
    VideoCatalogueComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
