import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent {

  listProductsFilter: Product[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void{
    this.getProductsFilter();
  }

  getProductsFilter() {
    this._productService.getListproductFilter().subscribe({
      next: (result: any) => {
        //console.log(result[0]);
        this.listProductsFilter = result;
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
        this.getProductsFilter();
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
