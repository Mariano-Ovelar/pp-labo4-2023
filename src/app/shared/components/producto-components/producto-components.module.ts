import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoProductoComponent } from './listado-producto/listado-producto.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListadoProductoComponent, ProductoDetalleComponent],
  exports: [ListadoProductoComponent, ProductoDetalleComponent],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class ProductoComponentsModule {}
