// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart-components';
import { LoginComponent } from './components/login/login-components'; // ✅ Import LoginComponent


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Pagina de start
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent }, // ✅ Adăugăm ruta pentru coș
  { path: 'login', component: LoginComponent }, // ✅ Adaugă ruta Login
  { path: '**', redirectTo: '' }, // ✅ Redirecționează rutele necunoscute la Home
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Opțional: setează login ca pagină principală
];
