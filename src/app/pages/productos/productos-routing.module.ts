import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosAltaComponent } from './productos-alta/productos-alta.component';
import { ProductosListadoComponent } from './productos-listado/productos-listado.component';
import { LogueadoGuard } from 'src/app/guards/logueado.guard';

const routes: Routes = [
  {
    path: 'alta',
    component: ProductosAltaComponent,
    canActivate: [LogueadoGuard],
  },
  { path: 'listado', component: ProductosListadoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
