import { Component, OnInit } from '@angular/core';
import commande from '../_files/commandes.json';
import produits from '../_files/produits.json';

@Component({
  selector: 'app-mescommandes',
  templateUrl: './mescommandes.component.html',
  styleUrls: ['./mescommandes.component.css']
})
export class MescommandesComponent implements OnInit {
  
  constructor() { }
  commandes:{commande_id :string,référence: string,pnom:string,id:string,detail_c:string,total_cmd:string,date_cmd:string,etat:string,payement:string,adresse:string}[]=commande;
  prds:{ref:string,nom :string,description: string,prix:string}[]=produits;
  async ngOnInit(): Promise<void> {
    var i = sessionStorage.getItem("idc");
    var url = 'http://127.0.0.1:8000/techstore/commande/?id='+String(i);
    await fetch(url)
    }
  async fDelete(i:string)
  {
    var dict = {"id":i}
    var url = 'http://127.0.0.1:8000/techstore/commande/supp/';
    var ch = JSON.stringify(dict);
    let res = await fetch(url,
        {
            method:"post",
            body:ch
        }
        );
    alert(res);
    location.reload();
  }
}
