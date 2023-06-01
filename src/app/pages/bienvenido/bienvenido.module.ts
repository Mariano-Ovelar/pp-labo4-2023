import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BienvenidoRoutingModule } from './bienvenido-routing.module';
import { BienvenidoComponent } from './bienvenido.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BienvenidoComponent,

  ],
  imports: [
    CommonModule,
    BienvenidoRoutingModule,
    SharedModule
  ]
})
export class BienvenidoModule { }
