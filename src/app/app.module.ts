import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { TaskPageComponent } from './components/pages/tasks/task-page/task-page.component';
import {StoreModule} from "@ngrx/store";
import {tasksReducer} from "./store/tasks/tasks-reducer";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {TasksEffects} from "./store/tasks/tasks-efects";
import {RouterModule} from "@angular/router";
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer} from "./store/router/CustomSeriializer";

@NgModule({
  declarations: [
    AppComponent,
    TaskPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      tasksState: tasksReducer,
      router:routerReducer
    }),
    EffectsModule.forRoot([TasksEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),
    RouterModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(
      {serializer: CustomSerializer}
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
