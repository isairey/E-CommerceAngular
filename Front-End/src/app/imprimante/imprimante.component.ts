import { Component, OnInit } from '@angular/core';
import imprimante from '../_files/type.json'

@Component({
  selector: 'app-imprimante',
  templateUrl: './imprimante.component.html',
  styleUrls: ['./imprimante.component.css']
})
export class ImprimanteComponent implements OnInit {
  imprimantes:{ref:string,nom :string,description: string,prix:string,image:string}[]=imprimante;
  constructor() { }

  async ngOnInit(): Promise<void> {
    var url = 'http://127.0.0.1:8000/techstore/produits/imprimante'
    await fetch(url);
  }
  async  detailprd(ref : string)
  {
    var url = 'http://127.0.0.1:8000/techstore/produits/detail/?ref='+String(ref);
    await fetch(url);
  }
}
