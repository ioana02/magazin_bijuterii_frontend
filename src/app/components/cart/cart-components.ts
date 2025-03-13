import { Component } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-components.html',
  standalone: true,  // ✅ Adăugăm standalone: true
  styleUrls: ['./cart-components.css'],
  imports: [CommonModule] // ✅ Adăugăm CommonModule aici
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      console.log("Produse în coș:", items); // ✅ Vezi dacă produsele apar în consolă
      this.cartItems = items;
    });
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.cartService.updateCart(this.cartItems);
  }

  getTotal() {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
}