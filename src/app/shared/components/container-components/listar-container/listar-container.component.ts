import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listar-container',
  templateUrl: './listar-container.component.html',
  styleUrls: ['./listar-container.component.scss']
})
export class ListarContainerComponent {
  @Input() listaContainersRecibida!: any;
  @Output() containerSelecionada: EventEmitter<any> = new EventEmitter<any>();
  
  selecionar(container: any) {
    this.containerSelecionada.emit(container);
  }
}
