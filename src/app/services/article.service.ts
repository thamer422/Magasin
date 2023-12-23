import { Injectable } from '@angular/core';
import { Article } from '../model/article.model';
import { Categorie } from '../model/categorie.model';
@Injectable({
providedIn: 'root'
})
export class ArticleService {
tab_art : Article[];
categories:Categorie[];
constructor() {
this.tab_art = [{codea : 1, libelle : "Souris Wifi", prix : 39.100, qte : 8,dateAjout : new Date("09/27/2022"),categ:{codec : 1, nomCat : "Périphérique PC",
description:"Périphériques d'entrée/sortie pour les PCs"}},
{codea : 2, libelle : "Clavier Gaming", prix : 45.900, qte : 11,dateAjout : new Date("09/30/2022"),categ:{codec : 1, nomCat : "Périphérique PC",
description:"Périphériques d'entrée/sortie pour les PCs"}},
{codea : 3, libelle : "Manette de jeu", prix : 26,qte:5,dateAjout : new Date("10/02/2022"),categ:{codec : 3, nomCat : "Smartphone",
description:"Toutes les marques de téléphones"}}
];
this.categories = [
  {codec : 1, nomCat : "Périphérique PC", description:"Périphériques d'entrée/sortie pour les PCs"},
  {codec : 2, nomCat : "PC", description:"Toutes les marques de Laptops"},
  {codec : 3, nomCat : "Smartphone", description:"Toutes les marques de téléphones"}
  ];
}


listeArticles():Article[] {
return this.tab_art;
}
ajouterArticle(art: Article){
  this.tab_art.push(art);
  console.log("Ajout avec succes : "+art.libelle);
}
supprimerArticle(art: Article){
  const index = this.tab_art.indexOf(art, 0);
  if (index > -1) {
    this.tab_art.splice(index, 1);
  }
}

consulterArticle(id:number): Article {
    return this.tab_art.find(art => art.codea == id)!;
}

  modifierArticle(art: Article) {
    this.supprimerArticle(art);
    this.ajouterArticle(art);
  }

  listeCategories():Categorie[] {
      return this.categories;
  }

  consulterCategorie(id:number): Categorie{
      return this.categories.find(cat => cat.codec == id)!;
  }

  calculNbArticles(): number{
      return this.tab_art.length;
  }
  
  calculTotalStock(): number{
      let tot=0;
      this.tab_art.forEach( (art) => {
      tot += Number(art.prix)!*Number(art.qte)!;
      })
      return tot;
  }
      
  calculNbCategories(): number{
      return this.categories.length;
  }
      
}
