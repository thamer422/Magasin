import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Article } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit{
  articleCourant=new Article();
  categories! : Categorie[];
  codecModifie! : any;
  constructor(private route: ActivatedRoute,private router:Router, private articleService: ArticleService){}
  
  modifArticle(){
    this.articleCourant.categ = this.articleService.consulterCategorie(this.codecModifie);
    this.articleService.modifierArticle(this.articleCourant);
    console.log("Article modifié avec succes : "+
    this.articleCourant.libelle+":"+this.articleCourant.prix+"DT, qté="+
    this.articleCourant.qte+", ajoutée le "+this.articleCourant.dateAjout);
    this.router.navigate(['articles']);
    }
  ngOnInit():void{
    this.categories = this.articleService.listeCategories();
    this.articleCourant = this.articleService.consulterArticle(this.route.snapshot.params['id']);
    console.log("Code article à modifier "+this.articleCourant.codea);
    this.codecModifie = this.articleCourant.categ.codec;
  }
}
