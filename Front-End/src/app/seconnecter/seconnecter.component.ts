import { Component, OnInit } from '@angular/core';
import data from '../_files/compte.json';

@Component({
  selector: 'app-seconnecter',
  templateUrl: './seconnecter.component.html',
  styleUrls: ['./seconnecter.component.css']
})
export class SeconnecterComponent implements OnInit {

  constructor() { }

  async ngOnInit(): Promise<void> {
    
    (<HTMLInputElement>document.getElementById("inscription")).addEventListener("click",this.fCreate);
    (<HTMLInputElement>document.getElementById("connecter")).addEventListener("click",this.fConnect);
  }
  async fCreate() {
    var nom = (<HTMLInputElement>document.getElementById("nomutilisateur")).value;
    var ntelephone = (<HTMLInputElement>document.getElementById("ntelephone")).value;
    var email = (<HTMLInputElement>document.getElementById("semail1")).value;
    var mdp = (<HTMLInputElement>document.getElementById("spassword")).value;
    var dict = {
      "nom":nom,
      "ntelephone":ntelephone,
      "email":email,
      "mdp":mdp
    }
    var url = 'http://127.0.0.1:8000/techstore/client/';
    var ch = JSON.stringify(dict);
    let res = await fetch(url,
        {
            method:"post",
            body:ch
        }
        );
    alert(res);
    var urll = 'http://127.0.0.1:8000/techstore/compte/';
    await fetch(urll);
  }
  async fConnect()
  {
    var url = 'http://127.0.0.1:8000/techstore/compte/';
    await fetch(url);
    var email = (<HTMLInputElement>document.getElementById("cemail1")).value;
    var mdp = (<HTMLInputElement>document.getElementById("cpassword")).value;
    alert(data);
    for (let index = 0; index < data.length; index++) 
    {
      var e = data[index].email;
      var m = data[index].password;
      if(e==email && m==mdp)
      {
        sessionStorage.setItem("idc",data[index].id);
        sessionStorage.setItem("nc",data[index].nutilisateur);
        window.open("http://localhost:4200/moncompte","_self");
        break;
      }
    }
    var urll = 'http://127.0.0.1:8000/techstore/compte/connecte/?id='+sessionStorage.getItem("idc");
    await fetch(urll);
  }
  
}
