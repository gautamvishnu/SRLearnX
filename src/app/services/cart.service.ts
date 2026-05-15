import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Course[] = [];

  constructor() { }

  getCartItems(): Course[] {
    return this.cartItems;
  }

  addToCart(course: Course): void {
    if (!this.cartItems.some(item => item.id === course.id)) {
      this.cartItems.push(course);
    }
  }

  removeFromCart(courseId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== courseId);
  }

  clearCart(): void {
    this.cartItems = [];
  }

  getCartTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  getCartItemCount(): number {
    return this.cartItems.length;
  }
}
