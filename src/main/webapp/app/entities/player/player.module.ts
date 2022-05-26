import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Admin02SharedModule } from 'app/shared/shared.module';
import { PlayerComponent } from './player.component';
import { PlayerDetailComponent } from './player-detail.component';
import { PlayerUpdateComponent } from './player-update.component';
import { PlayerDeleteDialogComponent } from './player-delete-dialog.component';
import { playerRoute } from './player.route';
import { PictureComponent } from './picture/picture.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';

@NgModule({
  imports: [ImageCropperModule, Admin02SharedModule, RouterModule.forChild(playerRoute)],
  declarations: [
    PlayerComponent,
    PlayerDetailComponent,
    PlayerUpdateComponent,
    PlayerDeleteDialogComponent,
    PictureComponent,
    ProfilePictureComponent,
  ],
  entryComponents: [PlayerDeleteDialogComponent],
})
export class JhipsterFrontEndPlayerModule {}
