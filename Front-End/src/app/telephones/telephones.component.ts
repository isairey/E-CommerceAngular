import { Component, OnInit } from '@angular/core';
import telephone from '../_files/type.json'

@Component({
  selector: 'app-telephones',
  templateUrl: './telephones.component.html',
  styleUrls: ['./telephones.component.css']
})
export class TelephonesComponent implements OnInit {
  telephones:{ref:string,nom :string,description: string,prix:string,image:string}[]=telephone;
  constructor() { }

  async ngOnInit(): Promise<void> {
    var url = 'http://127.0.0.1:8000/techstore/produits/téléphone'
    await fetch(url);
  }
  async  detailprd(ref : string)
  {
    var url = 'http://127.0.0.1:8000/techstore/produits/detail/?ref='+String(ref);
    await fetch(url);
  }
}
