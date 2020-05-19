import { Component, OnInit } from '@angular/core';
import { livro } from '../model/livro';
import { HomeService } from '../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  title: string = 'Novo Livro';
  livro: livro = new livro();


  constructor(private router: Router, private homeService: HomeService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.homeService.save(this.livro).then(response => {
      console.log(response);
      this.router.navigate(['']);
    });
  }

}
