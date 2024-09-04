import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
// import { myInterceptorInterceptor } from './my-interceptor.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),//withInterceptors([myInterceptorInterceptor]) ),
    provideRouter(routes)

  ],

};
