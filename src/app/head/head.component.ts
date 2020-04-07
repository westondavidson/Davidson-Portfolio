import { Component, OnInit, HostListener } from '@angular/core';

import { Renderer2, Inject } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {





    x;
    y;
    //cast balls as a HTMLCollectionOf elements
    balls = document.getElementsByClassName("ball") as HTMLCollectionOf<HTMLElement>;
    @HostListener('document:mousemove', ['$event'])
    onMouseMove(e) {
      this.x = e.clientX * 120 / window.innerWidth + "%";
      this.y = e.clientY * 130 / window.innerHeight + "%";

  //console.log(e);

  for(var i=0;i<2;i++){
    this.balls[i].style.left = this.x;
    this.balls[i].style.top = this.y;
    this.balls[i].style.transform = "translate(-"+this.x+",-"+this.y+")";
    //console.log(this.x);
    //console.log(this.y);
}

}

  constructor() {

   }

  ngOnInit(): void {
/*
    //save selected tab on page reload --NOT WORKING YET--
    $(document).ready(function(){
      //on document ready,
    $('a[data-toggle="collapse"]').on('shown.bs.collapse', function(e) {
      localStorage.setItem('activeTab', $(e.target).attr('href'));
    });
    var activeTab = localStorage.getItem('activeTab');
    if(activeTab){
      $('#accordion a[href="' + activeTab + '"]').collapse('show');
    }
    });
    */

  }

}
