import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { ImprimanteComponent } from './imprimante/imprimante.component';
import { TelephonesComponent } from './telephones/telephones.component';
import { TeleviseurComponent } from './televiseur/televiseur.component';
import { SeconnecterComponent } from './seconnecter/seconnecter.component';
import { MonprofilComponent } from './monprofil/monprofil.component';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { CconfirmeeComponent } from './cconfirmee/cconfirmee.component';
import { MescommandesComponent } from './mescommandes/mescommandes.component';
import { PayementComponent } from './payement/payement.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';

const routes: Routes = [
  { path:'produits', component: ProduitsComponent},
  { path:'acceuil', component : AccueilComponent},
  { path:'accessoire', component : AccessoiresComponent},
  { path:'ordinateur', component : OrdinateurComponent},
  { path:'imprimante', component : ImprimanteComponent},
  { path:'telephone', component : TelephonesComponent},
  { path:'televiseur', component : TeleviseurComponent},
  { path:'seconnecter', component: SeconnecterComponent},
  { path:'profil', component : MonprofilComponent},
  { path:'moncompte', component : MoncompteComponent},
  { path:'confirmé', component : CconfirmeeComponent},
  { path:'commandes', component : MescommandesComponent},
  { path:'payement', component : PayementComponent},
  { path:'s\'authentifier', component : AuthentificationComponent},
  { path:'detail', component : DetailproduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{

}
