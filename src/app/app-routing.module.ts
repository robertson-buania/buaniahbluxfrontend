import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 // {path: "", component: HomeComponent},
 // {path: "home", component: HomeComponent},
 // {path: "magasin", component: MagasinComponent},
 // {path: "events", component: EventsComponent},
// {path: "apropos", component: AproposComponent},
  //{path: "details-article/:id", component: DetailArticleComponent},
 // {path: "contact", component: ContactComponent},
//  {path: "compte", component: NewCompteComponent},
//  {path: "personne", component: PersonneComponent},
 // {path: "connexion", component: ConnexionComponent},
 // {path: "renovation", component: RenovationComponent},
 // {path: "paiement", component: PaiementComponent},
 // {path:"espaceclient/:id",component:EspaceClientComponent},
 // {path:"newarticle",component:NewArticleComponent},
 // {path:"addphoto/:idclient",component:AddPhotoArticleComponent},
 // {path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
