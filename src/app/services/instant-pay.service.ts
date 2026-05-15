import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class InstantPayService {
  private readonly baseUrl =  environment.baseUrl;// "https://api.viabledigiseva.com/v3/";
  // private readonly baseUrl ="https://uatpayment.viabledigiseva.com/api/v3/";// "https://api.viabledigiseva.com/v3/";
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    const url = `${this.baseUrl}InstantPay/BillerList?categoryKey=C09`;
    return this.http.get<any[]>(url);
  }

  getBillerList(): Observable<any[]> {
    const url = `${this.baseUrl}InstantPay/BillerList?categoryKey=C09`;
    return this.http.get<any[]>(url);
  }


  getSchoolList(): Observable<any[]> {
    const url = `/school.json`;
    return this.http.get<any[]>(url);
  }

  fetchBillDetails(body:any): Observable<any> {
    const url = `${this.baseUrl}InstantPay/FetchBillDetails`;

    // const body = {
    //   billerId: "EDU007561KER01",
    //   initChannel: "AGT",
    //   externalRef: "DMCPAY1748284483",
    //   inputParameters: {
    //     param1: "9023532532",
    //     param2: "7228800953",
    //   },
    //   deviceInfo: {
    //     ip: "192.168.1.10",
    //     mac: "00:1A:2B:3C:4D:5E",
    //   },
    //   remarks: {
    //     param1: 7228800953,
    //   },
    //   transactionAmount: 100,
    // };
   

    return this.http.post<any>(url, body);
  }

  geBillerDetails(billerId: any): Observable<any[]> {
    const url = `${this.baseUrl}InstantPay/BillerDetails?billerId=${billerId}`;
    return this.http.get<any[]>(url);
  }

  InstantPayBillPay(payload: any) {
    const url = `${this.baseUrl}InstantPay/BillPay`;
    return this.http.post<any>(url, payload);
  }

  easeBuzzInitiatePaymentGateway(data: any) {
    const endpoint = `${this.baseUrl}Wallet/InitEasebuzzPGTransaction`;
    return this.http.post(`${endpoint}`, data);
  }
}
