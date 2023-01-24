import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-information-form',
  templateUrl: './products-information-form.component.html',
  styleUrls: ['./products-information-form.component.css']
})
export class ProductsInformationFormComponent {
  addProduct: FormGroup;
  accion = 'Agregar';
  id = 0;
  product: Product | undefined;

  public defective: string = "no";

  constructor(private fb: FormBuilder,
              private _productService: ProductService,
              private router: Router,
              private aRoute: ActivatedRoute){
    this.addProduct = this.fb.group({
      name: ['', Validators.required]
    })
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.AccionEditar();
  }

  AccionEditar(){
    if(this.id !== 0){
      this.accion = 'Editar';
      this._productService.searchproduct(this.id).subscribe({
        next: (result: any) => {
          this.product = result[0];
          this.defective = result[0].defective_product;

          this.addProduct.patchValue({
            name: result[0].name_product
          })
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

  addoredit() {
    
    if(this.product == undefined){
      const product: Product = {
        id_product: 0,
        name_product: this.addProduct.get('name')?.value,
        status_product: 'INPUT',
        defective_product: this.defective,      
      }
  
      this._productService.saveProduct(product).subscribe({
        next: (result: any) => {
          this.router.navigate(['/']);
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          //console.log('complete');
        }
      })
    }else{
      const product: Product = {
        id_product: this.id,
        name_product: this.addProduct.get('name')?.value,
        status_product: 'INPUT',
        defective_product: this.defective,      
      }

      this._productService.updateProduct(this.id, product).subscribe({
        next: (result: any) => {
          this.router.navigate(['/']);
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

  ChangeCheckbox() {
    if(this.defective == "no"){
      this.defective = "Defectuosa";
    }else{
      this.defective = "no";      
    }
  }
}
