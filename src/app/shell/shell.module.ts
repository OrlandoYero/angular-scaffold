import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { ShellRoutingModule } from './shell-routing.module';

import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainComponent, PageNotFoundComponent, LoginComponent],
  imports: [
    CommonModule,
    ShellRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ShellModule { }
