import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  mobile: string = '';
  password: string = '';
  confirmPassword: string = '';
  acceptTerms: boolean = false;

  // Method to register
  register() {
    if (!this.name) {
      alert('Please enter your name');
      return;
    }

    if (!this.isValidEmail(this.email)) {
      alert('Please enter a valid email');
      return;
    }

    if (!this.isValidMobile(this.mobile)) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    if (!this.password || this.password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!this.acceptTerms) {
      alert('Please accept the Terms and Conditions');
      return;
    }

    // In a real application, this would call an API to register the user
    alert('Registration successful! Please check your email for verification.');
    // Redirect to login page or dashboard
  }

  // Validate email
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate mobile number
  isValidMobile(mobile: string): boolean {
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
  }
}
