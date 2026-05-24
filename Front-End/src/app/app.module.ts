import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './produits/produits.component';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { TeleviseurComponent } from './televiseur/televiseur.component';
import { ImprimanteComponent } from './imprimante/imprimante.component';
import { TelephonesComponent } from './telephones/telephones.component';
import { PnavbarComponent } from './pnavbar/pnavbar.component';
import { SeconnecterComponent } from './seconnecter/seconnecter.component';
import { MonprofilComponent } from './monprofil/monprofil.component';
import { MoncompteComponent } from './moncompte/moncompte.component';
import { CconfirmeeComponent } from './cconfirmee/cconfirmee.component';
import { MescommandesComponent } from './mescommandes/mescommandes.component';
import { PayementComponent } from './payement/payement.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AccueilComponent,
    ProduitsComponent,
    AccessoiresComponent,
    OrdinateurComponent,
    TeleviseurComponent,
    ImprimanteComponent,
    TelephonesComponent,
    PnavbarComponent,
    SeconnecterComponent,
    MonprofilComponent,
    MoncompteComponent,
    CconfirmeeComponent,
    MescommandesComponent,
    PayementComponent,
    AuthentificationComponent,
    DetailproduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
