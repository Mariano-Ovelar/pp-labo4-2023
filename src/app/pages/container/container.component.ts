import { Component } from '@angular/core';
import { Alert } from 'src/app/library/class/alert';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  listaContainers: any;
  containersSelecionada: any;
  formVisible: boolean = true;
  spinner: boolean = false;

  constructor(private containerSrv: ContainerService) {}
  ngOnInit() {
    this.actualizarLista();
  }

  objetoSelecionado($event: any) {
    this.containersSelecionada = $event;
    this.formVisible = true;
  }

  actualizarLista() {
    this.spinner = true;
    this.containerSrv.actualizarLista().subscribe((res: any) => {
      this.listaContainers = res;
      this.spinner = false;
    });
  }

  seModificoLista($event: boolean) {
    this.formVisible = $event;
    setTimeout(() => {
      this.actualizarLista();
    }, 2000);
  }
  addLista() {
    try {
      this.spinner = true;
      setTimeout(() => {
        this.actualizarLista();
        Alert.mensajeConfirmacion('Se a Agrego un nuevo container!!!!');
      }, 2000);
    } catch (error) {}
  }
}
