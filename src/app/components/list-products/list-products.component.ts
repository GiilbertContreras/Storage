import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  listProducts: Product[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void{
    this.getProducts();
  }

  getProducts() {
    this._productService.getListproduct().subscribe({
      next: (result: any) => {
        console.log(result[0]);
        this.listProducts = result;
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        //console.log('complete');
      }
    })
  }

  deleteProduct(id_product: any){
    console.log(id_product);
    this._productService.deleteProduct(id_product).subscribe({
      next: (result: any) => {
        console.log(result);
        this.getProducts();
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        //console.log('complete');
      }
    })
  }
}
