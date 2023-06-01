import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos-listado',
  templateUrl: './productos-listado.component.html',
  styleUrls: ['./productos-listado.component.scss'],
})
export class ProductosListadoComponent {
  listaProductos: any;
  productosSelecionada: any;
  usuario: any = this.userSrv.estaLogeado;
  spinner: boolean = false;

  constructor(
    private productoSrv: ProductoService,
    private userSrv: AuthService
  ) {}
  ngOnInit() {
    this.spinner = true;

    this.productoSrv.actualizarLista().subscribe((res: any) => {
      this.listaProductos = res;
      this.spinner = false;
    });
  }
  mostrar($event: any) {
    this.productosSelecionada = $event;
  }
}
