import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { GeneralService } from '../general.service';
import { HttpClient } from '@angular/common/http';
import { Resresponse } from '../resresponse';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  providers: [GeneralService]
})


export class DetalleComponent implements OnInit, OnDestroy {

  private picture: string;
  private url: string;
  public  pictures: string[];
  //raza solicitada
  private perro: string;
  //origen de datos
  private origen : string;


  message: any;
  subscription: Subscription;
  subscriptionbreed: Subscription;


  constructor( private http: HttpClient, private general:GeneralService) {
  	this.perro = "akita";
  	this.origen = "WEB";
  	this.subscriptionbreed = this.general.getMessageBreed().subscribe(message => { this.message = message; this.perro = message; });
  	this.subscription = this.general.getMessage().subscribe(message => { this.message = message; this.origen = message});
  	}

  ngOnInit() {
  if (this.origen == 'WEB'){


	this.url = 'https://dog.ceo/api/breed/' + this.perro + '/images';
    this.http.get<Resresponse>(this.url).subscribe(
      data =>{
        this.pictures = data.message;
      },
      err =>{
        alert("Problemas con cliente http en detalle");
      }
    );
    }
    else{
    	alert(this.origen);
    }
  }


   ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscriptionbreed.unsubscribe();
        this.subscription.unsubscribe();

    }


}
