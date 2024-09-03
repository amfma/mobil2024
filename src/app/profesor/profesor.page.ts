import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage {
  data: any;

  constructor(private activatedrouter:ActivatedRoute, private router: Router) {
    this.activatedrouter.queryParamMap.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras.state?.['user'];
        console.log(this.data)        
      } else {this.router.navigate(['/login'])}
    })
   }


}
