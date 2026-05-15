import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentGatewayService {

  constructor(private http: HttpClient) { }

  getPgInitiateInfo(initiateId: any): Observable<any> {
    const url = `${environment.edubaseUrl}/api/PaymentGateway/InitiateInfo?initiateId=`+initiateId;
    return this.http.get<any>(url);
  }
}
