import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EaseBuzzPaymentService {

  initiateEaseBuzzPayment(accessKey: string, callback: (res: any, comp: any) => void, component: any) {
    const easebuzzCheckout = new (window as any).EasebuzzCheckout('TX6DM1IACI', 'prod');

    const options = {
      access_key: accessKey,
      onResponse: (response: any) => {
        callback(response, component);
      },
      theme: '#123456'
    };

    easebuzzCheckout.initiatePayment(options);
  }

  initiateEaseBuzzEduPayment(accessKey: any, callback: (res: any, comp: any) => void, component: any) {
    const easebuzzCheckout = new (window as any).EasebuzzCheckout('XZXVMNPM9T', 'prod');

    const options = {
      access_key: accessKey,
      onResponse: (response: any) => {
        callback(response, component);
      },
      theme: '#123456'
    };

    easebuzzCheckout.initiatePayment(options);

    setTimeout(() => {
  const iframe = document.getElementById('ebzCheckoutIframe') as HTMLElement;
  if (iframe) {
    iframe.style.width = '80vw';   // 80% of viewport width
    iframe.style.height = '85vh';  // 85% of viewport height
    iframe.style.borderRadius = '12px';
  }

  const modal = document.getElementById('ebzCheckoutModal') as HTMLElement;
  if (modal) {
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
  }
}, 1000);
  }
}
