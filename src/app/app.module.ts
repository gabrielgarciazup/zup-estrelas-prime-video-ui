import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { TruncatePipe } from './pipes/truncate.pipe';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { VideoSectionComponent } from './video-section/video-section.component';

import { StartComponent } from './pages/start/start.component';
import { SeriesComponent } from './pages/series/series.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ChildrenComponent } from './pages/children/children.component';
import { FilteredVideosComponent } from './pages/filtered-videos/filtered-videos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    
    // components
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    VideoSectionComponent,
    FilteredVideosComponent,

    // pipes
    TruncatePipe,

    // pages
    StartComponent,
    SeriesComponent,
    MoviesComponent,
    ChildrenComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
