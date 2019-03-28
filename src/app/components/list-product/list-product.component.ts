import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  private productURL = "http://localhost:8080/products";
  productsList: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.productURL)
      .subscribe(response => {
        this.productsList = <any>response;
      });
  }

}
