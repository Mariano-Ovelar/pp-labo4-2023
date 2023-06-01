import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss'],
})
export class TablaPaisesComponent {
  @Input() listaPaisesRecibida!: any;
  @Output() paisElegido: EventEmitter<any> = new EventEmitter<any>();

  
  selectedOption: any;

  onOptionSelected(option: number) {
    this.selectedOption = option;
    this.paisElegido.emit(option);
  }
}
