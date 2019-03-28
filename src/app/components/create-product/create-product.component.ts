import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  private createProductURL = 'http://localhost:8080/products'; 
  private productForm: FormGroup;
  errorMessages: string[];
  submitted = false;

  constructor(
    private alertService: AlertService,
    private http: HttpClient, 
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  get f() {
    return this.productForm.controls;
  }

  createProduct() {
    this.submitted = true;

    if (this.productForm.invalid) {
      return;
    }

    let fakeForm = {name: '', price: 2};
    let formRaw = this.productForm.getRawValue();
    let productJSON = JSON.stringify(formRaw);
    
    // let productJSON = JSON.stringify(fakeForm);
    
    let jsonHeader = new HttpHeaders({'Content-Type': "application/json"});

    this.http.post(this.createProductURL, productJSON, {headers: jsonHeader})
      .subscribe(
        response => {
          console.log(productJSON);
          this.router.navigate(["list-product"]);
        },

        error => {
          this.alertService.errorAlert(<any>error.error.errors);
        })
  }
      
}
