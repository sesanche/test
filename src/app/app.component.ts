import { Component } from '@angular/core';
import { GeneralService } from './general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	

  constructor(private general : GeneralService ) { }

  ngOnInit(){
  }

 
    sendMessageWeb(): void {
        this.general.sendMessage('WEB');
    }

    sendMessageFile(): void {
        this.general.sendMessage('FILE');
    }

    clearMessage(): void {
        this.general.clearMessage();
    }


}
