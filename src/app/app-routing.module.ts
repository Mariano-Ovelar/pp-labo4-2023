import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { LogueadoGuard } from './guards/logueado.guard';
import { NoLogueadoGuard } from './guards/no-logueado.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  /*   {
    path: '',
    component: BienvenidoComponent
  }, */
  {
    path: '',
    redirectTo: 'bienvenido',
    pathMatch: 'full',
  },
  {
    path: 'bienvenido',
    loadChildren: () =>
      import('./pages/bienvenido/bienvenido.module').then(
        (m) => m.BienvenidoModule
      ),
  },

  {
    path: '404',
    component: ErrorComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [NoLogueadoGuard],
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./pages/productos/productos.module').then(
        (m) => m.ProductosModule
      ),
  },
  {
    path: 'container',
    loadChildren: () =>
      import('./pages/container/container.module').then(
        (m) => m.ContainerModule
      ),
    canActivate: [AdminGuard],
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
