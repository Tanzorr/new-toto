import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './store/router/custom-serializer';
import { NavigationModule } from './components/presentational/navigation/navigation.module';
import { usersReducer } from './store/users/users-reducers';
import { UsersEffects } from './store/users/users-effects';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from './services/ui/modal.service';
import { AlertService } from './services/ui/alert.service';
import { AlertModule } from './components/libs/alert/alert.module';
import { SpinnerModule } from './components/libs/spinner/spinner.module';
import { SpinnerLoaderService } from './services/ui/spinner-loader.service';
import { authReducer } from './store/auth/auth-reducers';
import { AuthEffects } from './store/auth/auth-efects';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { vaultsReducer } from './store/valuts/vaults-reducers';
import { VaultsEffects } from './store/valuts/vaults-effects';
import { PasswordsEffects } from './store/passwords/passwords-effects';
import { passwordsReducer } from './store/passwords/passwords-reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      usersState: usersReducer,
      router: routerReducer,
      vaultsState: vaultsReducer,
      passwordsState: passwordsReducer,
      authState: authReducer,
    }),
    EffectsModule.forRoot([UsersEffects, AuthEffects, VaultsEffects, PasswordsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),
    RouterModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer }),
    NavigationModule,
    NgbModule,
    AlertModule,
    SpinnerModule,
  ],
  providers: [
    ModalService,
    AlertService,
    SpinnerLoaderService,
    NgbActiveModal,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
