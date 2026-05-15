import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PaymentGatewayService } from '../../services/payment-gateway.service';
import { ActivatedRoute } from '@angular/router';
import { EaseBuzzPaymentService } from '../../services/ease-buzz-payment.service';

@Component({
  selector: 'app-payment-gateway',
  imports: [],
  templateUrl: './payment-gateway.component.html',
  styles: ``
})
export class PaymentGatewayComponent {
  initiateId: any;

  constructor(private paymentGatewayService: PaymentGatewayService,
    private route: ActivatedRoute,
    private readonly easeBuzzPaymentService: EaseBuzzPaymentService
  ) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.initiateId = params['redirect'];
      if (this.initiateId) {
        this.getPgInitiateInfo();
      } else {
        const data = localStorage.getItem('pg-redirect-info');
        if (data) {
          const redirectinfo = JSON.parse(data);
          localStorage.removeItem('pg-redirect-info');
          window.location.href = redirectinfo.redirectUri;
        } else {
          alert('Invalid link!')
          window.history.back();
        }
      }
    });
  }

  getPgInitiateInfo() {
    this.paymentGatewayService.getPgInitiateInfo(this.initiateId).subscribe((response: any) => {
      if (response) {
        if (response.isExpired === false) {
          localStorage.setItem('pg-redirect-info', JSON.stringify(response));
          if (response.agencyId === environment.PgAgency.EasebuzzEdu) {
            this.launchEasebuzzCheckout(response.paymentLink);
          }
        } else {
          alert('Payment link has been expired!')
          window.location.href = response.redirectUri;
        }
      } else {
        alert('Smothing went wrong, try again later!');
        window.history.back();
      }
    })
  }

  launchEasebuzzCheckout(redirectUri: string) {
    const token = redirectUri.split("/").pop();
    this.easeBuzzPaymentService.initiateEaseBuzzEduPayment(
      token,
      this.paymentCallback,
      this
    );
  }

  paymentCallback(response: any, component: this) {
    const data = localStorage.getItem('pg-redirect-info');
    if (data) {
      const redirectinfo = JSON.parse(data);
      localStorage.removeItem('pg-redirect-info');
      window.location.href = redirectinfo.redirectUri;
    } else {
      alert('Invalid link!')
      window.history.back();
    }
    // if (response.status === "success") {
    //   // Handle successful payment
    //   console.log("Payment successful:", response.easepayid);
    //   console.log("Payment successful:", response.bank_ref_num);

    //   // // In payment callback component
    //   // component.paymentSettal(response, component);
    //   // alert();
    // } else if (response.status === "userCancelled") {
    //   console.warn("Payment cancelled by user");
    //   alert("Payment cancelled by user");
    // } else {
    //   console.error("Payment failed:", response);
    //   alert("Payment failed");
    // }
  }
}
