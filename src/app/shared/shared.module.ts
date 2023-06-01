import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetallePaisComponent } from './components/pais/detalle-pais/detalle-pais.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { TablaPaisesComponent } from './components/pais/tabla-paises/tabla-paises.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    NavbarComponent,
    DetallePaisComponent,
    QuienSoyComponent,
    TablaPaisesComponent,
    SpinnerComponent,
  ],
  exports: [
    NavbarComponent,
    DetallePaisComponent,
    QuienSoyComponent,
    TablaPaisesComponent,
    SpinnerComponent,

  ],
  imports: [CommonModule, RouterModule,FormsModule],
})
export class SharedModule {}
