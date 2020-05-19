import { Injectable } from '@angular/core';
import axios from 'axios';
import { livro } from '../model/livro';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getAll(){
    return axios.get(`${environment.api}livro/`);
  }

  save(livro: livro) {
    const livroBody = {
      titulo: livro.titulo,
      descricao: livro.descricao,
      autor: livro.autor,
      anoPublicacao: livro.anoPublicacao
    };
      return axios.post(`${environment.api}livro/`, livroBody);
  }
}
