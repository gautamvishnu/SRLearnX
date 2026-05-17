import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Course } from '../../models/course.model';
import { RazorpayService } from '../../services/razorpay.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: Course[] = [];

  constructor(public cartService: CartService,
    public razorpayService: RazorpayService
  ) {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(courseId: number): void {
    this.cartService.removeFromCart(courseId);
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = this.cartService.getCartItems();
  }

  getCartTotal(): number {
    return this.cartService.getCartTotal();
  }

  paymentWithRazorPay() {
    // const payload = {
    //   partnerId: 51,
    //   amount: this.getCartTotal(),
    //   charge: 10,
    //   firstName: "Vishnu",
    //   mobile: "9990662544",
    //   email: "amaren1982@gmail.com",
    //   txnId: "",
    //   sUrl: "",
    //   ramarks: "this is cart",
    // };

    const payload = {
      amount: this.getCartTotal(),
      "fullName": "Vishnu",
      "mobile": "9654584647",
      "emailId": "gautam.vishnu007@gmail.com",
      "clientRefId": "SrLeanX-123456",
      "callbackUrl": "https://srlearnx.com/payment-callback",
      "accessMode": "WEB"
    }

    this.razorpayService.initiateRazorpayGateway(payload).subscribe({
      next: (response: any) => {
        console.log(
          " initiateRazorpayGateway : ",
          response,
          response?.data?.orderId
        );
        if (response.status)
          this.razorpayService.pay(response?.data?.orderId, 10);
        else
          alert("Failed to initiate payment gateway. Please try again.");
      },
      error: (err) => {

        console.error("Error fetching bill details", err);

      },
    });
  }
}
