import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Alert } from 'src/app/library/class/alert';
import { PaisService } from 'src/app/services/pais.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos-alta',
  templateUrl: './productos-alta.component.html',
  styleUrls: ['./productos-alta.component.scss'],
})
export class ProductosAltaComponent {
  form!: FormGroup;
  paisSelecionado: any;
  listaPaises = [];
  spinner: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private paisSrv: PaisService,
    private productoSrv: ProductoService
  ) {}
  ngOnInit() {
    this.spinner = true;
    this.form = this.formBuilder.group({
      codigo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      precio: new FormControl(1, [Validators.required]),
      stock: new FormControl(0, [Validators.required]),
      comestible: new FormControl(true, [Validators.required]),
      paisOrigen: new FormControl('', [Validators.required]),
    });
    this.cargarPaises();
    this.spinner = false;
  }
  cargarPaises() {
    this.paisSrv.getPaisRegion().subscribe((data) => {
      this.listaPaises = data;
      console.log(this.listaPaises);
    });
  }
  guardar() {
    this.form.disable();
    this.productoSrv.guardar(this.form.value).then(() => {
      this.form.enable();
      this.router.navigateByUrl('/productos/listado');
      Alert.mensajeConfirmacion('Se a agrego un nuevo Producto!!!!');
    });
  }
  selecionPais($event: any) {
    this.paisSelecionado = $event;
    this.form.get('paisOrigen')?.setValue(this.paisSelecionado);
    console.log(this.form.value.paisOrigen);
  }
  inicializarCampos() {
    this.form.get('codigo')?.setValue('');
    this.form.get('precio')?.setValue(0);
    this.form.get('stock')?.setValue(0);
    this.form.get('comestible')?.setValue(true);
    this.form.get('descripcion')?.setValue('');
    this.form.get('paisOrigen')?.setValue('');
  }
}
