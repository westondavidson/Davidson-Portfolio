import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class PortfolioDataService {

  getPortfolioData(){
  return this.http.get('/assets/portfolio.json');
  };


  constructor(
        private http: HttpClient
  ) {

   }


}
