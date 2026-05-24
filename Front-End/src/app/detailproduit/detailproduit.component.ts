import { Component, OnInit } from '@angular/core';
import produit from '../_files/produit.json';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {

  constructor() { }
  prd:{ref:string,nom :string,details:string,quantite:string,prix:string,image:string,images:string,caracteristique:any}[]=produit;
  img:string[]=[];
  ngOnInit(): void {
    var img = this.prd[0].images.split(",");
    this.img=img;
    var dt = JSON.parse(this.prd[0].caracteristique);
    console.log(dt);
    for (let index = 0; index < dt.length; index++) {
      var ch = '<tr><td>'+dt[index].champ+'</td><td>'+dt[index].valeur+'</td></tr>';
      (<HTMLInputElement>document.getElementById("td")).insertAdjacentHTML("beforeend",ch);
    }
  }

}
