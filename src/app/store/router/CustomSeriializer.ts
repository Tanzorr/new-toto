import {Params, RouterStateSnapshot} from '@angular/router';
import {RouterStateSerializer} from '@ngrx/router-store';

export interface RouterStateModel {
  state: any;
  url: string;
  params: Params;
  queryParams: Params;

}


export class CustomSerializer implements RouterStateSerializer<RouterStateModel> {
    serialize(routerState: RouterStateSnapshot): RouterStateModel {
     let route = routerState.root;
      while (route.firstChild) {
        route = route.firstChild;
      }

      const { url, root: { queryParams } } = routerState;
      const { params } = route;

      return { url, params, queryParams };
   }
}
