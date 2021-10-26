import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Admin02SharedModule } from 'app/shared/shared.module';
import { TrickComponent } from './trick.component';
import { TrickDetailComponent } from './trick-detail.component';
import { TrickUpdateComponent } from './trick-update.component';
import { TrickDeleteDialogComponent } from './trick-delete-dialog.component';
import { trickRoute } from './trick.route';

@NgModule({
  imports: [Admin02SharedModule, RouterModule.forChild(trickRoute)],
  declarations: [TrickComponent, TrickDetailComponent, TrickUpdateComponent, TrickDeleteDialogComponent],
  entryComponents: [TrickDeleteDialogComponent],
})
export class JhipsterFrontEndTrickModule {}
