import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  book: Book = new Book();

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.bookService.save(this.book).subscribe(book => {
      console.log(book);
      this.router.navigate(['']);
    });
  }

}
