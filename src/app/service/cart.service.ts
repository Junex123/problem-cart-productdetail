import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItemResponseDto } from '../Class/CartItemResponseDto';
import { Product } from '../Class/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:9400';

  constructor(private http: HttpClient) { }

  addToCart(product: Product, quantity: number, username: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/cart/add?quantity=${quantity}&username=${username}`, product);
  }

  getCartDetails(username: string): Observable<CartItemResponseDto[]> {
    return this.http.get<CartItemResponseDto[]>(`${this.baseUrl}/cart?username=${username}`);
  }

  deleteCartItem(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/cart/${id}`);
  }
}
