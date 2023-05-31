import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/datas/data';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products: IProduct[] | undefined;
  value: string = '';

  constructor(private productsService: ProductService) { }

  search(): any {
    this.products = products.filter((prd: any) => prd.name.toLowerCase().match(this.value.toLowerCase()))
  }

  getProduct() {
    return this.productsService.getData().subscribe(
      (res: any) => {
        this.products = res

      },
      (err: any) => {
        console.log(err);

      }
    )
  }

  ngOnInit() {
    this.getProduct()
  }
}
