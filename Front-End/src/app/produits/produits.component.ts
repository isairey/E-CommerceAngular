import { Component, OnInit } from '@angular/core';
import data from '../_files/produits.json';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  constructor() { }
  prds:{ref:string,nom :string,description: string,prix:string,image:string}[]=data;
  async ngOnInit() {
    var url = 'http://127.0.0.1:8000/techstore/produits/';
    await fetch(url);
    console.log(data);
  }
  async  detailprd(ref : string)
  {
    var url = 'http://127.0.0.1:8000/techstore/produits/detail/?ref='+String(ref);
    await fetch(url);
  }

}
