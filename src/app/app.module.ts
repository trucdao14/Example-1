import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day3Component } from './components/day3/day3.component';
import { Day4Component } from './components/day4/day4.component';
import { Day5Component } from './components/day5/day5.component';
import { Day6Component } from './components/day6/day6.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { Day27Component } from './components/day27/day27.component';
import { ArticleListComponent } from './components/day27/article-list/article-list.component';
import { ArticleDetailComponent } from './components/day27/article-detail/article-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    Day3Component,
    Day4Component,
    Day5Component,
    Day6Component,
    ProgressBarComponent,
    Day27Component,
    ArticleListComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
