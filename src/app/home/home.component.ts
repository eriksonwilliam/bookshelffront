import { Component, OnInit } from '@angular/core';
import { livro } from '../model/livro';
import { HomeService } from '../services/home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  livros: livro[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit()  {
    this.homeService.getAll().then(response => {
      console.log(response)
    })/*subscribe(livros => {
      console.log(livros)*/
  }

}
