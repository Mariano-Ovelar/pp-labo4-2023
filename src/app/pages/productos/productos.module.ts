import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { ProductosAltaComponent } from './productos-alta/productos-alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductosListadoComponent } from './productos-listado/productos-listado.component';
import { ProductoComponentsModule } from 'src/app/shared/components/producto-components/producto-components.module';


@NgModule({
  declarations: [
    ProductosComponent,
    ProductosAltaComponent,
    ProductosListadoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ProductoComponentsModule

  ]
})
export class ProductosModule { }
