import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartitemComponent } from './cartitem/cartitem.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CartitemComponent,ProductdetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'problems';
}
