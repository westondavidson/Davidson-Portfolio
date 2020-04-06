import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

closeWin(){
  this.googleRedirect.close();

};
  constructor() {


   }

  ngOnInit(): void {


  }

}
