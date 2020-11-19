import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/siteService/product.service';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {

  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct() {
    this.product.loadProduct(10, 20).subscribe((data: any) => {


    });
  }
}
