import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init()
   }

   async init(){
    const storage = await this.storage.create();
    this._storage = storage;
   }

   public login(role: string, name: string, id: number){
    this._storage?.set('LOGIN', true);
    this._storage?.set('ROLE', role);
    this._storage?.set('NAME', name);
    this._storage?.set('ID', id);
   }

   public logout(){
    this._storage?.clear();
   }

   public async check_login(){
    const state = await this._storage?.get('LOGIN');
    return state
   }

   public async check_user():Promise<any>{
    const user = {rol: String, nombre:String, id:Number}
    user.rol = await this._storage?.get('ROLE');
    user.nombre = await this._storage?.get('NAME');
    user.id = await this._storage?.get('ID');
    return user
   }
}
