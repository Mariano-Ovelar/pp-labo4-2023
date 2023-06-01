import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alert } from 'src/app/library/class/alert';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-modificar-container',
  templateUrl: './modificar-container.component.html',
  styleUrls: ['./modificar-container.component.scss'],
})
export class ModificarContainerComponent {
  @Input() containersRecibido!: any;
  @Output() containerModificado: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  Form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private containerSrv: ContainerService
  ) {
    this.Form = this.formBuilder.group({
      codigo: ['', Validators.required],
      color: ['', Validators.required],
      empresa: ['', Validators.required],
      capacidad: [0, Validators.required],
      docActivo: [true],
    });
  }
  ngOnChanges() {
    this.Form.get('codigo')?.setValue(this.containersRecibido.codigo);
    this.Form.get('color')?.setValue(this.containersRecibido.color);
    this.Form.get('empresa')?.setValue(this.containersRecibido.empresa);
    this.Form.get('capacidad')?.setValue(this.containersRecibido.capacidad);
  }

  modificar() {
    Alert.mensajeAdvertecia(
      'Está seguro de hacer estos cambios?',
      '',
      'Si!'
    ).then((result) => {
      if (result.isConfirmed) {
        this.containerSrv
          .modificar(this.containersRecibido, this.Form.value)
          .then(() => {
            this.containersRecibido.codigo = this.Form.value.codigo;
            this.containersRecibido.color = this.Form.value.color;
            this.containersRecibido.empresa = this.Form.value.empresa;
            this.containersRecibido.capacidad = this.Form.value.capacidad;
            this.containerModificado.emit(false);
            Alert.mensajeConfirmacion('Se a modificado el container!!!!');
          });
      }
    });
  }
}
