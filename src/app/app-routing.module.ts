import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';

const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent},
    { path: 'about', component: AboutComponent},
    { path: 'product', component: ProductComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];


@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {


}