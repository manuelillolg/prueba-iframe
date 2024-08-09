import { HttpInterceptorFn } from '@angular/common/http';

export const myInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Working")
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Basic RElHSVRBSVAtUkVQT1JUXGphdmllci5nb256YWxlejpUZW1wb3JhbDAxLg==`
    }
  });
  return next(authReq);
};
