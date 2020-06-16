import { Component, OnInit } from '@angular/core';

import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-mat-cards',
  templateUrl: './mat-cards.component.html',
  styleUrls: ['./mat-cards.component.css']
})
export class MatCardsComponent implements OnInit {
  portfolioTabs;

  constructor(

    private cardService: PortfolioDataService
  ) {

   }

  ngOnInit(): void {


      this.portfolioTabs = this.cardService.getPortfolioData();


  }

}
