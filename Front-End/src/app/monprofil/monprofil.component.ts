import { Component, OnInit } from '@angular/core';
import data from '../_files/comptec.json';

@Component({
  selector: 'app-monprofil',
  templateUrl: './monprofil.component.html',
  styleUrls: ['./monprofil.component.css']
})
export class MonprofilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (<HTMLInputElement>document.getElementById("nomutilisateur")).value=data[0].nutilisateur;
    (<HTMLInputElement>document.getElementById("ntelephone")).value=data[0].ntelephone;
    (<HTMLInputElement>document.getElementById("email")).value=data[0].email;
    (<HTMLInputElement>document.getElementById("spassword")).value=data[0].password;
    (<HTMLInputElement>document.getElementById("enregistrer")).addEventListener("click",this.fCreate);
  }
  async fCreate() {
    var nom = (<HTMLInputElement>document.getElementById("nomutilisateur")).value;
    var ntelephone = (<HTMLInputElement>document.getElementById("ntelephone")).value;
    var email = (<HTMLInputElement>document.getElementById("email")).value;
    var mdp = (<HTMLInputElement>document.getElementById("spassword")).value;
    var dict = {
      "id":sessionStorage.getItem("idc"),
      "nom":nom,
      "ntelephone":ntelephone,
      "email":email,
      "mdp":mdp
    }
    var url = 'http://127.0.0.1:8000/techstore/client/update/';
    var ch = JSON.stringify(dict);
    let res = await fetch(url,
        {
            method:"post",
            body:ch
        }
        );
    alert(res);
  }
}
