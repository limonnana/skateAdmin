import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Admin02SharedModule } from 'app/shared/shared.module';
import { Admin02CoreModule } from 'app/core/core.module';
import { Admin02AppRoutingModule } from './app-routing.module';
import { Admin02HomeModule } from './home/home.module';
import { Admin02EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Admin02SharedModule,
    Admin02CoreModule,
    Admin02HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Admin02EntityModule,
    Admin02AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class Admin02AppModule {}
