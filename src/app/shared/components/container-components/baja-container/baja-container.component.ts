import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alert } from 'src/app/library/class/alert';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-baja-container',
  templateUrl: './baja-container.component.html',
  styleUrls: ['./baja-container.component.scss'],
})
export class BajaContainerComponent {
  Form: FormGroup;
  @Input() containersRecibido!: any;
  @Output() containerEliminado: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private containerSrv: ContainerService
  ) {
    this.Form = this.formBuilder.group({
      codigo: ['', Validators.required],
      color: ['', Validators.required],
      empresa: ['', Validators.required],
      capacidad: [0, Validators.required],
    });
  }
  ngOnInit() {}
  ngOnChanges() {
    this.Form.get('codigo')?.setValue(this.containersRecibido.codigo);
    this.Form.get('color')?.setValue(this.containersRecibido.color);
    this.Form.get('empresa')?.setValue(this.containersRecibido.empresa);
    this.Form.get('capacidad')?.setValue(this.containersRecibido.capacidad);
  }
  eliminar() {
    Alert.mensajeAdvertecia(
      '¿Está seguro?',
      '¡No podrás revertir esto!',
      'Si, bórralo!'
    ).then((result) => {
      if (result.isConfirmed) {
        this.containerSrv.eliminar(this.containersRecibido).then(() => {
          this.containerEliminado.emit(false);
          Alert.mensajeConfirmacion('Se a eliminado el container!!!!');
        });
      }
    });
  }
}
