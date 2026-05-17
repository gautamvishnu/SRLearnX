import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

declare var Razorpay: any;

@Injectable({
  providedIn: "root",
})
export class RazorpayService {
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
      key: "rzp_live_SZjnZf3GZ5Xeml",
      amount: amount * 100,
      currency: "INR",
      name: "SRLearnX",
      order_id: orderId,
      handler: (response: any) => {
        console.log("Payment Success:", response);
        // Call your backend to verify
      },
      prefill: {
        name: "Vishnu Gautam",
        email: "techy.vishnu007@gmail.com",
        contact: "9654584747",
      },
      theme: { color: "#3399cc" },
    };

    const razorpay = new Razorpay(options);
    razorpay.open();
  }

  initiateRazorpayGateway(payload: any): Observable<any> {
    const url = `${this.baseUrl}PaymentGatewayOpen/SmRPayEducation`;
    return this.http.post<any>(url, payload);
  }
}
