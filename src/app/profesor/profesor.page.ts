import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit{
  data: any;
  modalAbierto: boolean = false;
  qrString: string = "";
  cursos: any[] = []
  sesiones: any[] = []

  constructor(private router: Router, public auth: AuthService,
    private api:ApiService
  ) {
   }

   // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
   ngOnInit() {
    this.cargar_cursos(this.auth.id??2)
   }


   abrirModal(estaAbierto: boolean){
    this.modalAbierto = estaAbierto
   }

   cargar_cursos(profesor_id: number){
    this.api.getCursos(profesor_id).subscribe((cursos)=>{
      this.cursos = cursos
    })
   }

   ver_sesiones(curso_id: number){
    this.api.getSesiones(curso_id).subscribe((sesiones)=>{
      this.sesiones = sesiones
      this.abrirModal(true)
    })
   }

   crearSesion(curso_id: number){
    let nav: NavigationExtras ={
      state : {
        curso_id: curso_id
      }
    }

    this.router.navigate(['/sesion'], nav)
   }

   logout(){
    this.auth.logout()
    this.router.navigate(['/login'])
   }
}
