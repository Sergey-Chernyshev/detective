import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withRouterConfig} from '@angular/router';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {authTokenInterceptor} from "./services/auth.interceptor";
import {routes} from "./app.routes";


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),  // Используем provideRouter вместо RouterModule.forRoot
    provideHttpClient(withInterceptors([authTokenInterceptor])),
  ]
};
