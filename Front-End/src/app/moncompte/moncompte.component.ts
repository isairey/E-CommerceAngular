import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-moncompte',
  templateUrl: './moncompte.component.html',
  styleUrls: ['./moncompte.component.css']
})
export class MoncompteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (<HTMLInputElement>document.getElementById("deconnecter")).addEventListener("click",this.fDeconnect);
  }
  fDeconnect()
  {
    sessionStorage.clear();
    window.open("http://localhost:4200/seconnecter","_self");
  }

}
