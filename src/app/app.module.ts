import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

// Star in Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductsInformationFormComponent } from './components/products-information-form/products-information-form.component';
import { ShowProductsComponent } from './components/show-products/show-products.component';
import { ReactiveFormsModule } from '@angular/forms';
// Finish in Components

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListProductsComponent,
    ProductsInformationFormComponent,
    ShowProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
