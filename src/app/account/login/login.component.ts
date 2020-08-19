import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../../service/server.service';
import { ToastController,NavController,Platform,LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  
  email = "";
  password = "";
  text:any;
  
  constructor(private route: ActivatedRoute,
    public server : ServerService,
    public toastController: ToastController,
    private nav: NavController,
    public loadingController: LoadingController,
    public alertController: AlertController){}

  ngOnInit()
  {
  
  }

  async login(data)
  {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();

    this.server.login(data).subscribe((response:any) => {
    // this.presentAlert(response)
    loading.dismiss();
    });
  }
  async presentAlert(txt) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: "Error",
      message: txt,
      buttons: ['OK']
    });
  }

  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 3000,
      position : 'top',
      mode:'ios',
      color:'dark'
    });
    toast.present();
  }
}
