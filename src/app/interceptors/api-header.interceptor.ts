import { HttpInterceptorFn } from '@angular/common/http';

export const apiHeaderInterceptor: HttpInterceptorFn = (req, next) => {
   const modifiedReq = req.clone({
      setHeaders: {
      Accept: 'text/plain',
      'authorised-key': 'openpg',
      'usercode': 'APDL0001',
      'partnerid': 'MANISH',
      'access-mode': 'WEB',
      'user-agent':"SRLearnX",
      'Content-Type': 'application/json-patch+json'
    }
  });
  return next(modifiedReq);
};
