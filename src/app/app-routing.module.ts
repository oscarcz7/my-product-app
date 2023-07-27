import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { ProductListComponent } from './product-list/product-list.component';
// import { ProductCreateComponent } from './product-create/product-create.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'stock',
    loadChildren: () =>
      import('./stock/stock.module').then((m) => m.StockPageModule),
  },
  {
    path: 'stock',
    redirectTo: 'stock',
    pathMatch: 'full',
  },
  // {
  //   path: 'products',
  //   loadChildren: () => import('./product-list/product-list.module').then( m => m.ProductListModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'products',
  //   pathMatch: 'full'
  // },
  // { path: '', redirectTo: 'products', pathMatch: 'full' },
  // { path: 'products', component: ProductListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
