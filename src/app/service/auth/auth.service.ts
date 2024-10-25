import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = false;
  role?: string;
  name?: string;
  id?: number;

  constructor(private storage: StorageService) { }

  public login(name: string, role: string, id: number){
    this.isLogin = true;
    this.role = role;
    this.name = name;
    this.id = id
    this.storage.login(this.role, this.name, this.id)
  }

  public logout(){
    this.isLogin = false;
    this.role = '';
    this.name = '';
    this.storage.logout()
  }
}
