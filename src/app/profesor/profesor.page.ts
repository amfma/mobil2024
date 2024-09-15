import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage {
  data: any;
  modalAbierto: boolean = false;
  qrString: string = "";
  clase: string = "";
  hora = "00:00";

  constructor(private activatedrouter:ActivatedRoute, private router: Router) {
    this.activatedrouter.queryParamMap.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras.state?.['user'];
        console.log(this.data)        
      } else {this.router.navigate(['/login'])}
    })
   }

   abrirModal(estaAbierto: boolean){
    console.log(this.hora)
    this.qrString = this.qrString.concat(this.clase, this.hora)
    this.modalAbierto = estaAbierto
   }
}
