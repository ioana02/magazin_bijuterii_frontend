// import { Component } from '@angular/core';
// import { ProductListComponent } from './components/product-list/product-list.component';

// @Component({
//   selector: 'app-root',
//   standalone: true, // ✅ Aplicația folosește standalone components
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   imports: [ProductListComponent] // ✅ Importă ProductListComponent
// })
// export class AppComponent {
//   title = 'Jewelry Frontend';
// }
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CartService } from './services/cart-service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthService } from './services/auth-service'; // ✅ Importă AuthService
import { Router } from '@angular/router'; // ✅ Import Router pentru navigare


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Importăm RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('cartAnimation', [
      state('default', style({ transform: 'scale(1)' })),
      state('active', style({ transform: 'scale(1.2)' })),
      transition('default <=> active', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class AppComponent {
  title = 'JewelryFrontend';
  cartCount = 0;
  animationState = 'default';
  isLoggedIn = false; // ✅ Variabilă pentru starea de autentificare

  constructor(private cartService: CartService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
     // ✅ Verificăm dacă utilizatorul este logat
     this.isLoggedIn = this.authService.isLoggedIn();
     this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
      this.triggerAnimation();
    });
  }
  triggerAnimation() {
    this.animationState = 'active';
    setTimeout(() => {
      this.animationState = 'default';
    }, 300);
  }
  logout() {
    this.authService.logout(); // ✅ Delogare
    this.isLoggedIn = false;
    this.router.navigate(['/login']); // ✅ Redirecționare la login
  }
}