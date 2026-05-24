import { Component, OnInit } from '@angular/core';
import accesoire from '../_files/type.json';
@Component({
  selector: 'app-accessoires',
  templateUrl: './accessoires.component.html',
  styleUrls: ['./accessoires.component.css']
})
export class AccessoiresComponent implements OnInit {
  accessoires:{ref:string,nom :string,description: string,prix:string,image:string}[]=accesoire;

  constructor() { }

  async ngOnInit(): Promise<void> {
    var url = 'http://127.0.0.1:8000/techstore/produits/accessoire'
    await fetch(url);
  }
  async  detailprd(ref : string)
  {
    var url = 'http://127.0.0.1:8000/techstore/produits/detail/?ref='+String(ref);
    await fetch(url);
  }
}
