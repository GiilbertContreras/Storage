import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductsInformationFormComponent } from './components/products-information-form/products-information-form.component';
import { ShowProductsComponent } from './components/show-products/show-products.component';

const routes: Routes = [
  { path: '', component: ListProductsComponent},
  { path: 'agregar', component: ProductsInformationFormComponent},
  { path: 'editar/:id', component: ProductsInformationFormComponent},
  { path: 'show', component: ShowProductsComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
