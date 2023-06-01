import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alert } from 'src/app/library/class/alert';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  spinner: boolean = false;

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });
  /*   constructor(private userSrv: UserService) {}
   */ constructor(private userSrv: AuthService, private router: Router) {}
  ngOnInit() {}
  async signUp() {
    this.spinner = true;
    if (this.form.valid && this.validarPassword()) {
      this.form.disable();

      const resUsuario: any = await this.userSrv
        .registro(this.form.value)
        .catch((err) => {
          console.log(err);
          Alert.mensajeError('Error!!!', 'Este correo ya esta registrado!!!!');
        });
      if (resUsuario) {
        const user = {
          uid: resUsuario.user.uid,
          name: resUsuario.user.displayName,
          email: resUsuario.user.email,
          rol: 'empleado',
        };
        this.userSrv.guardar(user).then(() => {
          Alert.mensajeConfirmacion(`Se registro exitoso!!!!!!!!`);
          setTimeout(() => {
            this.form.reset();
            console.log(`registro: sea registrado ${user.name}`);
            this.router.navigateByUrl('auth/login');
          }, 1500);
        });
      }
    } else {
      Alert.mensajeError('Error!!!', 'Las contraseñas no coisiden!!!!');
    }
    this.form.enable();
    this.spinner = false;
  }
  validarPassword() {
    return this.form.value.password === this.form.value.confirmPassword;
  }
}
