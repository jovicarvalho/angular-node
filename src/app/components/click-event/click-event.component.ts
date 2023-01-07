import { Component } from '@angular/core';

@Component({
  selector: 'app-click-event',
  templateUrl: './click-event.component.html',
  styleUrls: ['./click-event.component.css']
})
export class ClickEventComponent {

  show:boolean = false;
  fraseControlada:string = "Mensagem controlada pelo botão";
  fraseButton:string = "Exiba a mensagem!";
  color:string = "red";


  showMessage():void{
    this.show = !this.show;
  }

  verificaMensagem():string{
    if(this.show == true){
      return (this.fraseButton = "Delete a mensagem!");
  }else{
    return(this.fraseButton="Exiba a Mensagem!");
  }
  return "não funcionou";
  }
}
