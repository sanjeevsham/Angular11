import { Component, OnInit } from '@angular/core';
import { BooksdaoService } from '../booksdao.service';

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
  styleUrls: ['./book-catalog.component.css']
})
export class BookCatalogComponent implements OnInit {
  books: Array<any> = [];
  constructor(private booksvc: BooksdaoService) { }

  ngOnInit(): void {
    this.books = this.booksvc.getBooks();
  }

}