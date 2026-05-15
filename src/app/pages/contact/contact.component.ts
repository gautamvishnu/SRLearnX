import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: ContactFormData = {
    name: '',
    email: '',
    phone: '',
    country: 'India',
    message: ''
  };

  countries = ['England', 'India', 'Pakistan', 'Bangladesh', 'Nepal', 'US'];

  isSubmitted = false;
  isLoading = false;

  submitForm(): void {
    this.isLoading = true;

    // Simulate form submission
    setTimeout(() => {
      this.isLoading = false;
      this.isSubmitted = true;

      // Reset form after submission
      this.formData = {
        name: '',
        email: '',
        phone: '',
        country: 'India',
        message: ''
      };

      // Reset submission status after 5 seconds
      setTimeout(() => {
        this.isSubmitted = false;
      }, 5000);
    }, 1500);
  }
}
