import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../Article';
import { title } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public articles!: Observable<Article[]>;
  constructor(){ }
  ngOnInit(): void {
   this.articles = of<Article[]>(
   [ {title:"hello1",content:"asdasdadadasdadadada",slug:"bai-viet-1"},
   {title:"hello2",content:"asdasdadadasdadadada",slug:"bai-viet-2"},
   {title:"hello3",content:"asdasdadadasdadadada",slug:"bai-viet-3"}]
   )
  }
}
