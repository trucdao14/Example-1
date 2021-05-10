import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Article} from '../../models/article';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  articles$: Observable<Article[]> | undefined;
  constructor(private readonly articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles$ = this.articleService.articles$ ;
  }

}
