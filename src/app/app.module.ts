import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {tasksReducer} from "./store/tasks/tasks-reducer";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {TasksEffects} from "./store/tasks/tasks-efects";
import {RouterModule} from "@angular/router";
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer} from "./store/router/CustomSeriializer";
import {NavigationModule} from "./components/navigation/navigation.module";
import {usersReducer} from "./store/users/users-reducers";
import {UsersEffects} from "./store/users/users-efects";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ModalService} from "./services/modals/modal.service";
import {AlertService} from "./services/alerts/alert.service";
import {AlertModule} from "./components/libs/alert/alert.module";


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({
            tasksState: tasksReducer,
            usersState: usersReducer,
            router: routerReducer
        }),
        EffectsModule.forRoot([TasksEffects, UsersEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: false,
        }),
        RouterModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(
            {serializer: CustomSerializer}
        ),
        NavigationModule,
        NgbModule,
        AlertModule
    ],
  providers: [
    ModalService,
    AlertService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
