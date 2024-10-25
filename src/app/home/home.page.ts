import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapacitorBarcodeScannerOptions, CapacitorBarcodeScannerTypeHint,
  CapacitorBarcodeScanner
 } from '@capacitor/barcode-scanner';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../service/auth/auth.service';
import { ApiService } from '../service/api/api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;
  modalScannerAbierto: boolean = false;
  barcodeResult!: string;
  id: number= 1
  private options: CapacitorBarcodeScannerOptions ={
    scanButton: true,
    hint: CapacitorBarcodeScannerTypeHint.ALL
  }


  constructor(private router:Router,
    private alertController: AlertController,
    public auth: AuthService,
    private api:ApiService
  ) {
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permiso Denegado',
      message: 'Autorice al app a usar su camara',
      buttons: ['Ok']
    });
    await alert.present()
  }

  abrirScannerModal(estado: boolean){
    this.modalScannerAbierto = estado;
  }

  public async scannear(): Promise<void>{
    this.barcodeResult = (await CapacitorBarcodeScanner.scanBarcode(this.options)).ScanResult;
    console.log(this.barcodeResult)
    //this.api.actualizarAsistencia(this.barcodeResult, this.auth.id)
  }

  logout(){
    this.auth.logout()
    this.router.navigate(['/login'])
  }

}
