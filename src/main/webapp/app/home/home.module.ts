import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { Admin02SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { ContributionComponent } from './contribution/contribution.component';
import { StartComponent } from './start/start.component';

@NgModule({
  imports: [Admin02SharedModule, RouterModule.forChild(HOME_ROUTE), TypeaheadModule.forRoot()],
  declarations: [HomeComponent, ContributionComponent, StartComponent],
})
export class Admin02HomeModule {}
