import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompInterpolateService {

  getCompData(){
  return this.http.get('/assets/slides.json');
}


  constructor(
      private http: HttpClient
  ) { }


}
