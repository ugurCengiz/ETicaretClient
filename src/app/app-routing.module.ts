import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      
    ]
  },
  { path: "", component: HomeComponent },
  { path: "basket", loadChildren: () => import("./ui/components/baskets/baskets.module").then(module => module.BasketsModule) },
  { path: "products", loadChildren: () => import("./ui/components/products/products.module").then(module => module.ProductsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
