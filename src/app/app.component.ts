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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Importăm RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JewelryFrontend';
}