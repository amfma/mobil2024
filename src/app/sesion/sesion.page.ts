import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {
data: any;
lista: any[] = [];

  constructor(private activeroute: ActivatedRoute, private router: Router
    , private api: ApiService
  ){
    this.activeroute.queryParamMap.subscribe(params=>{
      if (this.router.getCurrentNavigation()?.extras.state){
        this.data = this.router.getCurrentNavigation()?.extras.state?.['curso_id'];
        console.log(this.data)
      } else {
        this.router.navigate(['/profesor'])
      }
    })
   }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    this.NuevaSesion()
  }

  NuevaSesion(){
    this.api.createSesion(this.data).subscribe((sesion)=>{
      this.lista = sesion.lista_alumnos
      console.log(this.lista)
    })
  }

}