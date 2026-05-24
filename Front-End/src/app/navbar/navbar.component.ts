import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (<HTMLInputElement>document.getElementById("cconnecter")).addEventListener("click",this.fConnect);
  }
  fConnect() {
    var id = sessionStorage.length;
    if (id==0) {
      window.open("http://localhost:4200/seconnecter","_self");
    }
    else
    {
      window.open("http://localhost:4200/moncompte","_self");
    }
  }
}
