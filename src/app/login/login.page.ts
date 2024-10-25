import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonInput } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { ApiService } from '../service/api/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  modalAbierto: boolean = false;
  mensajeErrorUsuario: string = "Requiere al menos 4 caracteres";
  mensajeErrorPassword: string = "Debe contener al menos 4 caracteres";
  log: any

  constructor(private router: Router, public acontrol:AlertController
    , private auth: AuthService, private api: ApiService
  ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

//Objeto que recibe el password y contraseña de la pagina de inicio  
  user = {
    usuario: "",
    password: ""
  }
  recuperar = {
    password: ""
  }

// alertaPassword() controla la alerta en caso de que el usuario o contraseña
// sean incorrectos

  async alertaPassword() {
    const alerta = await this.acontrol.create({
      header: 'Error',
      message: 'Usuario o contraseña incorrectos',
      buttons: ['Ok']
    })
    await alerta.present();
  }

// alertaRecuperar() controla la alerta de recuperar contraseña

async alertaRecuperar(){
  const alerta = await this.acontrol.create({
    header: 'Temporalmente',
    message: "Use 'profesor' o 'estudiante' de password",
    buttons: ['Ok']
  })

  await alerta.present()
}

//Manejo del modal asociado a la recuperacion de contraseña


// ingresar() controla el presionar ingresar en la pagina principal
// De momento utiliza this.user.password para determinar en que direccion enviar
// Si los casos no son "estudiante" o "profesor" muestrar alertaPassword()
  async ingresar(){
    
    this.api.getLogin(this.user.usuario, this.user.password).subscribe((newUsuario)=>{
      console.log(newUsuario)
      switch (newUsuario.rol_id){
        case 1:
          this.auth.login(newUsuario.nombre, 'PROFESOR', newUsuario.id)
          this.router.navigate(['/profesor'])
          break;
        case 2:
          this.auth.login(newUsuario.nombre, 'ESTUDIANTE', newUsuario.id)
          this.router.navigate(['/home'])
          break;
        default:
          this.alertaPassword();
      };
    })

  }

  
//Control del boton de recuperar contraseña.
//WIP diseñar el modal de recuperar contraseña
  abrirModal(estaAbierto: boolean){
    this.modalAbierto = estaAbierto;
  }

  recuperarPassword(){
    this.alertaRecuperar()
  }

//Objetivo: Cambiar el mensaje de error segun lo tipeado
//De momento da bugs al evaluar el mensaje
  userInput(){
    console.log('!')
  }
}
