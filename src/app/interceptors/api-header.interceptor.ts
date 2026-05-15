import { HttpInterceptorFn } from '@angular/common/http';

export const apiHeaderInterceptor: HttpInterceptorFn = (req, next) => {
   const modifiedReq = req.clone({
      setHeaders: {
      Accept: 'text/plain',
      'x-api-key': 'D4A1CD70-29AD-4B2F-92D7-01B6AF5A9BC4',
      usercode: 'POS00014',
      'access-mode': 'WEB',
      'Content-Type': 'application/json-patch+json'
    }
    // setHeaders: {
    //   Accept: 'text/plain',
    //   'x-api-key': '6E3B1F91-2B4D-4DB7-935A-ABFBC2A624D7',
    //   "usercode": 'POS00012',
    //   'access-mode': 'WEB',
    //   'Content-Type': 'application/json-patch+json'
    // }
  });
  return next(modifiedReq);
};
