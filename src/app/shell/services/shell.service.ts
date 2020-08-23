import { MainComponent } from './../main/main.component';
import { Routes, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationGuard } from '@app/auth';

@Injectable({
  providedIn: 'root'
})
export class ShellService {

  constructor() { }

  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: MainComponent,
      children: routes,
      canActivate: [AuthenticationGuard],
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true },
    };
  }

}
