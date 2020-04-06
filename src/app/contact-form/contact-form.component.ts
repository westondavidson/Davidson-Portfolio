import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

googleRedirect = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdkBbR0GzMhR4jNeTDXWBm0c0iaC9tlQOnQJvi3be4YJ72Ikw/formResponse";

closeWin(){
  this.googleRedirect.close();

};
  constructor() {


   }

  ngOnInit(): void {


  }

}
