import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  contactInfo: string = '';
  otp: string = '';
  otpSent: boolean = false;
  acceptTerms: boolean = false;

  // Method to request OTP
  requestOTP() {
    // In a real application, this would call an API to send OTP
    if (this.isValidContact()) {
      this.otpSent = true;
      alert('OTP sent to ' + this.contactInfo);
    } else {
      alert('Please enter a valid email or mobile number');
    }
  }

  // Method to login
  login() {
    if (!this.isValidContact()) {
      alert('Please enter a valid email or mobile number');
      return;
    }

    if (!this.otp) {
      alert('Please enter OTP');
      return;
    }

    if (!this.acceptTerms) {
      alert('Please accept the Terms and Conditions');
      return;
    }

    // In a real application, this would validate OTP with backend
    alert('Login successful!');
    // Redirect to home page or dashboard
  }

  // Validate email or mobile number
  isValidContact(): boolean {
    // Simple validation for demonstration
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    return emailRegex.test(this.contactInfo) || mobileRegex.test(this.contactInfo);
  }
}
