import { Component, OnInit } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from "@angular/platform-browser";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  trustedDashboardUrl: SafeUrl;
  linkedin;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer

  ) {
    this.matIconRegistry.addSvgIcon(
      "twitter",
      this.sanitizer.bypassSecurityTrustResourceUrl("../assets/twitter.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "linkedin",
      this.sanitizer.bypassSecurityTrustResourceUrl("../assets/linkedin.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "facebook",
      this.sanitizer.bypassSecurityTrustResourceUrl("../assets/facebook.svg")
    );


   }

  ngOnInit(): void {
  }

}
