import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timeout } from 'rxjs';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-alta-container',
  templateUrl: './alta-container.component.html',
  styleUrls: ['./alta-container.component.scss'],
})
export class AltaContainerComponent {
  Form: FormGroup;
  @Output() containerAgregado: EventEmitter<boolean> =
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
      docActivo: [true],
    });
  }
  ngOnInit() {}
  inicializarCampos() {
    this.Form.get('codigo')?.setValue('');
    this.Form.get('color')?.setValue('');
    this.Form.get('empresa')?.setValue('');
    this.Form.get('capacidad')?.setValue(0);
    this.Form.get('docActivo')?.setValue(true);
  }
  guardar() {
    this.Form.disable();
    this.containerSrv.guardar(this.Form.value).then(() => {
      this.containerAgregado.emit(true);
      this.Form.enable();
      this.inicializarCampos();
    }).catch((err)=>{
      this.containerAgregado.emit(err);
    });
  }
}
