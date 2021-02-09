import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { VideoCatalogueComponent } from './video-catalogue/video-catalogue.component';

import { TruncatePipe } from './pipes/truncate';
import { StartComponent } from './pages/start/start.component';
import { SeriesComponent } from './pages/series/series.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ChildrenComponent } from './pages/children/children.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilteredVideosComponent } from './pages/filtered-videos/filtered-videos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    
    // components
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    VideoCatalogueComponent,
    FilteredVideosComponent,

    // pipes
    TruncatePipe,
    FilterPipe,

    // pages
    StartComponent,
    SeriesComponent,
    MoviesComponent,
    ChildrenComponent

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
