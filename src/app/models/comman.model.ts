export interface AutoPayResponse {
  topupId: number;      // 'long' in C# maps to 'number' in TypeScript
  orderId: string;
  checkoutUrl: string;
}

export interface AutoPayRequest {
  amount: number;
  name: string;
  mobile: string;
  email: string;
  redirectUri: string;
}

export interface AutoPayResponseData {
  data: {
    topupId: number;
    orderId: string;
    checkoutUrl: string;
  };
  status: boolean;
  message: string;
}