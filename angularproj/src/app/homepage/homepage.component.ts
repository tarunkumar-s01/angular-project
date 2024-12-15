import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  img1:string='./images/img1.jpg'
  img2:string='./images/img2.jpg'
  img3:string='./images/img3.jpg'
  img4:string='./images/mainpage.png'
  bg:string='./images/bg.jpg'

}
