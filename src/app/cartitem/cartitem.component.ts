import { Component, OnInit } from '@angular/core';

import { Router, RouterLink, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Cart } from '../Class/Cart';
import { CartItemResponseDto } from '../Class/CartItemResponseDto';
import { CartService } from '../service/cart.service';
import { LoginService } from '../service/login.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cartitem',
  standalone: true,
  imports: [RouterModule,RouterLink,CommonModule],
  templateUrl: './cartitem.component.html',
  styleUrl: './cartitem.component.scss'
})
export class CartitemComponent implements OnInit {
  cartItems: Cart[] = [];
  User: any;

  constructor(private cartService: CartService,private router: Router,private loginService: LoginService) { }

  ngOnInit(): void {
    const username = this.loginService.getUserDetails();
    if (username) {
      this.getCartItems(username);
    } else {
      // Handle case where username is not available
    }
  }

  getCartItems(username: string) {
    this.cartService.getCartDetails(username).subscribe(
      (cartItemResponseDtos: CartItemResponseDto[]) => {
        // Map CartItemResponseDto to Cart
        this.cartItems = cartItemResponseDtos.map(dto => ({
          id: dto.id,
          product: dto.product,
          quantity: dto.quantity,
          user: dto.user // User property is excluded in CartItemResponseDto
        }));
      },
      (error) => {
        console.error('Error fetching cart items:', error);
      }
    );
  }
  
  

  removeCartItem(cartItemId: number) {
    this.cartService.deleteCartItem(cartItemId).subscribe(
      () => {
        this.cartItems = this.cartItems.filter(item => item.id !== cartItemId);
      },
      (error) => {
        console.error('Error removing cart item:', error);
      }
    );
  }

  goToShipping() {
    this.router.navigate(['cart', 'shippingaddress']);
  }


}











