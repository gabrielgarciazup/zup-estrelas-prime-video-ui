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
import { AuthComponent } from './pages/auth/auth.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { AuthGuard } from './pages/auth/auth.guard';
import { AuthService } from './pages/auth/auth.service';

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
    FooterComponent,
    AuthComponent,
    LoadingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
