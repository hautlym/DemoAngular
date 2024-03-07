import { title } from 'process';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-Admin',
  templateUrl: './Admin.component.html',
  styleUrls: ['./Admin.component.scss']
})
export class AdminComponent implements OnInit {

  @ViewChild("login") login!: LoginComponent;
  constructor() {

  }

  ngOnInit() {

  }

}
