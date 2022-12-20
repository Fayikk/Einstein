import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { HomeComponent } from './home/home/home.component';
import { ShopComponent } from './shop/shop/shop.component';

const routes: Routes = [
  {path:'',component: HomeComponent ,data :{breadCrumb:"Home"}},
  {path:'test-error',component: TestErrorComponent,data:{breadCrumb:"Test Error"}},
  {path:'server-error',component: ServerErrorComponent,data:{breadCrumb:"Server Error"}},
  {path:'not-found',component: NotFoundComponent,data:{breadCrumb:"Not found"}},
  {path:'shop',loadChildren: () =>  import('./shop/shop.module').then(mod => mod.ShopModule)},
  {path: 'basket', loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule),
    data: {breadCrumb:'Basket'}}, 

  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
