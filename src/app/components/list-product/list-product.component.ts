import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  private productURL = "http://localhost:8080/products";
  productsList: any[];

  currentPage = 1;
  itemsPerPage = 10;
  pageSize: number;


  constructor(private http: HttpClient, private alertService: AlertService) { }

  ngOnInit() {
    this.http.get(this.productURL)
      .subscribe(
        response => {
          this.productsList = <any>response;
        },

        error => {
          this.alertService.errorAlert(["Something went wrong with server :("]);
        }
      );
  }
}
