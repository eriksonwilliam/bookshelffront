import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/book';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {
  @Input()
  book: Book;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

}
