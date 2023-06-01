import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaContainerComponent } from './alta-container/alta-container.component';
import { BajaContainerComponent } from './baja-container/baja-container.component';
import { ListarContainerComponent } from './listar-container/listar-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModificarContainerComponent } from './modificar-container/modificar-container.component';

@NgModule({
  declarations: [
    AltaContainerComponent,
    BajaContainerComponent,
    ListarContainerComponent,
    ModificarContainerComponent,
  ],
  exports: [
    AltaContainerComponent,
    BajaContainerComponent,
    ListarContainerComponent,
    ModificarContainerComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ContainerComponentsModule {}
