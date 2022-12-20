import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Router, RouterModule } from '@angular/router';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared/shared.module';



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class ShopModule { }
