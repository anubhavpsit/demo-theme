import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';

import { MapsRoutes } from './maps.routing';
import { GoogleComponent } from './google/google.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { SinglemapComponent } from './singlemap/singlemap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MapsRoutes),
    AgmCoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    GoogleComponent,
    FullscreenComponent,
    SinglemapComponent
  ]
})

export class MapsModule {}
