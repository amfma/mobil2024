import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit{
  data: any;
  modalAbierto: boolean = false;
  qrString: string = "";
  clase: string = "";
  hora = "00:00";

  constructor(private router: Router, public auth: AuthService
  ) {
   }

   // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
   ngOnInit() {
   }


   abrirModal(estaAbierto: boolean){
    console.log(this.hora)
    this.qrString = this.qrString.concat(this.clase, this.hora)
    this.modalAbierto = estaAbierto
   }
}
