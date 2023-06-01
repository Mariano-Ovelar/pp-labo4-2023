import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.scss'],
})
export class ListadoProductoComponent {
  @Input() listaProductosRecibida!: any;
  @Output() productoSelecionada: EventEmitter<any> = new EventEmitter<any>();

  selecionar(producto: any) {
    this.productoSelecionada.emit(producto);
  }
}
