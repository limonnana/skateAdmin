import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
      {
        path: 'player',
        loadChildren: () => import('./player/player.module').then(m => m.JhipsterFrontEndPlayerModule),
      },
      {
        path: 'trick',
        loadChildren: () => import('./trick/trick.module').then(m => m.JhipsterFrontEndTrickModule),
      },
      {
        path: 'event',
        loadChildren: () => import('./event/event.module').then(m => m.JhipsterFrontEndEventModule),
      },
      {
        path: 'spot',
        loadChildren: () => import('./spot/spot.module').then(m => m.JhipsterFrontEndSpotModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class Admin02EntityModule {}
