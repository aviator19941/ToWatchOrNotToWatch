import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SearchService } from './components/search/search.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MylistComponent } from './components/mylist/mylist.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieComponent } from './components/movie/movie.component';
import { TvComponent } from './components/tv/tv.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { RecommendedCarouselComponent } from './components/recommended-carousel/recommended-carousel.component';
import { SimilarCarouselComponent } from './components/similar-carousel/similar-carousel.component';
import { PopularCarouselComponent } from './components/popular-carousel/popular-carousel.component';
import { TopratedCarouselComponent } from './components/toprated-carousel/toprated-carousel.component';
import { TrendingCarouselComponent } from './components/trending-carousel/trending-carousel.component';
import { PopularTvCarouselComponent } from './components/popular-tv-carousel/popular-tv-carousel.component';
import { TopratedTvCarouselComponent } from './components/toprated-tv-carousel/toprated-tv-carousel.component';
import { TrendingTvCarouselComponent } from './components/trending-tv-carousel/trending-tv-carousel.component';
import { ContinueWatchingCarouselComponent } from './components/continue-watching-carousel/continue-watching-carousel.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    CarouselComponent,
    MylistComponent,
    FooterComponent,
    MovieComponent,
    TvComponent,
    RecommendedCarouselComponent,
    SimilarCarouselComponent,
    PopularCarouselComponent,
    TopratedCarouselComponent,
    TrendingCarouselComponent,
    PopularTvCarouselComponent,
    TopratedTvCarouselComponent,
    TrendingTvCarouselComponent,
    ContinueWatchingCarouselComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    LayoutModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
