import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-contactus',
  imports: [FormsModule,CommonModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

  isFormVisible: boolean = false;

  // Define the form data object
  formData = {
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  };

  
  revealForm(): void {
    this.isFormVisible = !this.isFormVisible; 
  }

  
  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    
  }


}
