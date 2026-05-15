import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { AutoPayRequest } from "../models/comman.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AutoPayServiceService {
  // private readonly baseUrl = "https://uatpayment.viabledigiseva.com/api/v3/";
  private readonly baseUrl = environment.baseUrl; //"https://api.viabledigiseva.com/v3/";
  // private readonly baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {}

    initiateAutoPayPayment(payload: AutoPayRequest): Observable<any> {
      console.log("Initiating AutoPay Payment with payload:", payload);
      const url = `${this.baseUrl}AutoPe/InitiatePayment`;
      return this.http.post<any>(url, payload);
    }

}
