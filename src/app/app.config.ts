import {
  ApplicationConfig, importProvidersFrom,
  //provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { JwtModule } from '@auth0/angular-jwt';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';//si
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';


export function tokenGetter() {
  return sessionStorage.getItem('token');
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideCharts(withDefaultRegisterables()),
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          allowedDomains: ['localhost:8082'],
          disallowedRoutes: ['http://localhost:8082/login/forget'],
        },
      })
    ),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
  ],
};
