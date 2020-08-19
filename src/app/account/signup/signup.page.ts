import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../../service/server.service';
import { ToastController,NavController,LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  
  text:any;
  constructor(
    private route: ActivatedRoute,
    public server : ServerService,
    public toastController: ToastController,
    private nav: NavController,
    public loadingController: LoadingController,
    public modal: ModalController) {}

  ngOnInit()
  {
  }

  async signup(data)
  {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
     console.log(data)
    this.server.signup(data).subscribe((response:any) => {
    loading.dismiss();
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
