import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContainerComponentsModule } from 'src/app/shared/components/container-components/container-components.module';


@NgModule({
  declarations: [
    ContainerComponent,

  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    SharedModule,
    ContainerComponentsModule
  ]
})
export class ContainerModule { }
