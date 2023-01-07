import { Component } from '@angular/core';

@Component({
  selector: 'app-frist-component',
  templateUrl: './frist-component.component.html',
  styleUrls: ['./frist-component.component.css']
})
export class FristComponentComponent {
  name: string = "João Vitor";
  age: number = 25;
  job: string = "Developer";

}
