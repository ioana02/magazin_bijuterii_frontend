import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();
  private cartCount = new BehaviorSubject<number>(0);
  
  // Numarul de produse din coș
  cartCount$ = new BehaviorSubject<number>(0);

  addToCart(product: any) {
    const currentCart = this.cart.value;
    const updatedCart = [...currentCart, product];
    this.cart.next([...currentCart, product]);
    
    // Actualizăm numărul de produse
    this.cartCount$.next(this.cart.value.length);
  }

  getCartItems() {
    return this.cart$;
  }
  updateCart(updatedCart: any[]) {
    this.cart.next(updatedCart);
    this.cartCount$.next(updatedCart.length);
  }
}