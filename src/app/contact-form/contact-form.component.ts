import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {


  ngOnInit() {
  }

  public contactForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required]
  });


  constructor(public fb: FormBuilder){

  } 
  doContact(event){
    console.log(event);
    console.log(this.contactForm.value);
  }

  doSubmitAlert(event){
    alert('Information submitted!');
  }
  
}
