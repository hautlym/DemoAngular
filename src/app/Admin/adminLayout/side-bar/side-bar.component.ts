import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit {
  /**
   *
   */
  constructor( private router:Router) {

  }
    ngOnInit(): void {


    }

    public OnClick(value:any){
      console.log("url",this.router.isActive);

      // value.target.classList.add("active");
      // console.log('click', value.target);
    }
}
