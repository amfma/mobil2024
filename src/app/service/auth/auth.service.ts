import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = false;
  role: string | undefined;
  name: string | undefined;

  constructor(private storage: StorageService) { }

  public login(name: string, role: string){
    this.isLogin = true;
    this.role = role;
    this.name = name;
    this.storage.login(this.role, this.name)
  }

  public logout(){
    this.isLogin = false;
    this.role = '';
    this.name = '';
    this.storage.logout()
  }
}
