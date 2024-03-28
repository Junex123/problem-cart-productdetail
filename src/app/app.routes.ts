import { Routes } from '@angular/router';
import { CartitemComponent } from './cartitem/cartitem.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

export const routes: Routes = [
    {path:'cart',component:CartitemComponent},
    {path:'detail',component:ProductdetailComponent}
];
