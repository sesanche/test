import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { GeneralService } from '../general.service';
import { HttpClient } from '@angular/common/http';
import { Resresponse } from '../resresponse';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [GeneralService]
})


export class ListadoComponent implements OnInit, OnDestroy{

  message: any;
  subscription: Subscription;

 
  //contiene el nombre de una raza
  private breed: string;
  //contiene el listado de razas entregado desde service
  public breeds: string[];
  //origen de datos
  private origen : string;



  constructor( private general:GeneralService, private http: HttpClient) {
    this.origen = "WEB";
    this.subscription = this.general.getMessage().subscribe(message => { this.message = message; this.origen = message});
    }

  ngOnInit() {

  if (this.origen == 'WEB'){
    this.http.get<Resresponse>('https://dog.ceo/api/breeds/list').subscribe(
    data =>{
      this.breeds = data.message;
    },
    err =>{
      alert("Problemas con cliente http");
    }
    );
  }
  else{
    alert(this.origen);
    }

  }


  myEvent(perro:string){
    this.general.sendMessageBreed(perro);
  }




   ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }


}
