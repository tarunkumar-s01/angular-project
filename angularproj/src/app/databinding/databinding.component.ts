import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  

  inputdata:string="./images/logo.png"
  inputname:string="logo image"

  greeting(val:string){
    window.alert(`hello ${val}`);
  }

}
