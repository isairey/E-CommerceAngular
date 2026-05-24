import { Component, OnInit } from '@angular/core';
import client from '../_files/comptec.json'
import produit from '../_files/produit.json'

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {

  constructor() { }
  max=produit[0].quantite;
  ngOnInit(): void {
    (<HTMLInputElement>document.getElementById("nomutilisateur")).value=client[0].nutilisateur;
    (<HTMLInputElement>document.getElementById("reference")).value=produit[0].nom;
    (<HTMLInputElement>document.getElementById("ntelephone")).value=client[0].ntelephone;
    (<HTMLInputElement>document.getElementById("passercommande")).addEventListener("click",this.fcreate);
  }
  async fcreate()
  {
    var qt = (<HTMLInputElement>document.getElementById("quantite")).value;
    var adresse = (<HTMLInputElement>document.getElementById("adresse")).value;
    var tt = parseInt(qt)*parseInt(produit[0].prix);
    var payement = (<HTMLInputElement>document.getElementById("inlineFormCustomSelectPref")).value;
    var id=sessionStorage.getItem("idc");
    var dict = {
      "ref":produit[0].ref,
      "nom":produit[0].nom,
      "id":id,
      "qt":qt,
      "tt":tt,
      "adresse":adresse,
      "payement":payement
    }
    var url = 'http://127.0.0.1:8000/techstore/commande/';
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
