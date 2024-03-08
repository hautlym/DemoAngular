import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/Contact';

@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.scss']
})
export class ContactComponent implements OnInit {

  listContact: Contact[]=[];
  pageIndex:number = 0;
  PageSize:number =0;
  PageCount:number =0;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    };
    // Use the options parameter to set headers
    const options = { headers : headers };

    var kq = this.http.get('https://localhost:7095/api/Contact?pageIndex=1&pageSize=5',options).subscribe({
      next: (data:any) => {
        console.log(data);
        this.pageIndex=data.pageIndex;
        this.PageSize=data.pageSize;
        this.PageCount=data.total;
        this.listContact=data.item;
      },
      error: err => {
        console.log(err);
      }
    });
    console.log(kq);
  }
  OnSearch(keyword:any){
    var listContact = this.listContact.filter(x=>x.name==keyword||x.nameCompany==keyword);
  }
}
