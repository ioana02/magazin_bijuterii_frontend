import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ProductService } from '../../services/product.service';

import { CartService } from '../../services/cart-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,FormsModule], // Add CommonModule to imports
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: any[] = [];
  searchText: string = '';  // Textul căutat
  priceFilter: string = ''; // Filtrul de preț


  constructor(private productService: ProductService,private cartService: CartService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => {console.log('Produse primite:', JSON.stringify(data, null, 2));
        this.products = data;
      },
      error: (error) => {
        console.error('❌ Error fetching products:', error);
      }
    });
  }
   // Funcție care filtrează produsele
  filteredProducts() {
    return this.products.filter(product => {
      const matchesSearch = this.searchText
      ? product.name.toLowerCase().includes(this.searchText.toLowerCase())
      : true;;

      let matchesPrice = true;
      if (this.priceFilter === 'low') {
        matchesPrice = product.price < 500;
      } else if (this.priceFilter === 'medium') {
        matchesPrice = product.price >= 500 && product.price <= 1000;
      } else if (this.priceFilter === 'high') {
        matchesPrice = product.price > 1000;
      }

      return matchesSearch && matchesPrice;
    });
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} a fost adăugat în coș!`);
  }
}