import {Injectable} from '@angular/core';
import { from, Observable, of } from 'rxjs';
import {Article} from '../models/article';
import {map, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ArticleService{

  constructor(){
  }

  // tslint:disable-next-line:typedef
  get articles$(){
    return of<Article[]>([
      {title: 'Title 1', body: 'Day la bai 1', slug: 'title-1'},
      {title: 'Title 2', body: 'Day la bai 1', slug: 'title-2'}
    ]).pipe(shareReplay(1));
  }
  getArticle(slug: string): Observable<Article | undefined> {
    return this.articles$.pipe(map(articles => articles.find(ar => ar.slug === slug)));
  }
}
