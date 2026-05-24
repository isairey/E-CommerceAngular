import { Component, OnInit } from '@angular/core';
import televiseur from '../_files/type.json'

@Component({
  selector: 'app-televiseur',
  templateUrl: './televiseur.component.html',
  styleUrls: ['./televiseur.component.css']
})
export class TeleviseurComponent implements OnInit {
  televiseurs:{ref:string,nom :string,description: string,prix:string,image:string}[]=televiseur;
  constructor() { }

  async ngOnInit(): Promise<void> {
    var url = 'http://127.0.0.1:8000/techstore/produits/téléviseur'
    await fetch(url);
  }
  async  detailprd(ref : string)
  {
    var url = 'http://127.0.0.1:8000/techstore/produits/detail/?ref='+String(ref);
    await fetch(url);
  }
}
