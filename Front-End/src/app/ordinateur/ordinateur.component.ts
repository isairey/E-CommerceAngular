import { Component, OnInit } from '@angular/core';
import ordinateur from '../_files/type.json'

@Component({
  selector: 'app-ordinateur',
  templateUrl: './ordinateur.component.html',
  styleUrls: ['./ordinateur.component.css']
})
export class OrdinateurComponent implements OnInit {
  ordinateurs:{ref:string,nom :string,description: string,prix:string,image:string}[]=ordinateur;
  constructor() { }

  async ngOnInit(): Promise<void> {
    var url = 'http://127.0.0.1:8000/techstore/produits/ordinateur'
    await fetch(url);
  }
  async  detailprd(ref : string)
  {
    var url = 'http://127.0.0.1:8000/techstore/produits/detail/?ref='+String(ref);
    await fetch(url);
  }
}
