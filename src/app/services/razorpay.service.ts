import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

declare var Razorpay: any;

@Injectable({
  providedIn: "root",
})
export class RazorpayService {
  // private readonly baseUrl = 'https://api.viabledigiseva.com/v3/'; // "https://uatpayment.viabledigiseva.com/api/v3/";
  private readonly baseUrl = environment.baseUrl;

  loadRazorpayScript(): Promise<boolean> {
    return new Promise((resolve) => {
      if (
        document.querySelector(
          'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
        )
      ) {
        resolve(true); // already loaded
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  constructor(private http: HttpClient) {
    console.log(this.baseUrl);
  }
  async pay(orderId: string, amount: number): Promise<void> {
    const loaded = await this.loadRazorpayScript();
    if (!loaded) {
      alert("Razorpay SDK failed to load");
      return;
    }

    const options = {
      key: "rzp_live_POjCeKpBf38Rwp",
      amount: amount * 100,
      currency: "INR",
      name: "SRLearnX",
      order_id: orderId,
      handler: (response: any) => {
        console.log("Payment Success:", response);
        // Call your backend to verify
      },
      prefill: {
        name: "Akhil Jha",
        email: "srlearnxjha1647@gmail.com",
        contact: "9911001209",
      },
      theme: { color: "#3399cc" },
    };

    const razorpay = new Razorpay(options);
    razorpay.open();
  }

  createOrder(amount: number, userId: number): Observable<any> {
    let payload = {
      amount: amount,
      userId: userId,
    };
    const url = `${this.baseUrl}Razorpay/CreateOrder`;
    return this.http.post<any>(url, payload);
  }
  initiateRazorpayGateway(payload: any): Observable<any> {
    const url = `${this.baseUrl}Razorpay/PGTransaction`;
    return this.http.post<any>(url, payload);
  }
}
