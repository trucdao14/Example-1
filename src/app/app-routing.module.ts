import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleDetailComponent} from './components/day27/article-detail/article-detail.component';
import { ArticleListComponent } from './components/day27/article-list/article-list.component';

const routes: Routes = [

  {
    path: 'detail', component: ArticleDetailComponent,
  },
  {
    path: 'detail/:slug', component: ArticleListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


