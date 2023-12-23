import { Categorie } from "./categorie.model"

export class Article {
    codea!: Number
    libelle! : String
    prix! : Number
    qte! : Number
    dateAjout! : Date
    categ!:Categorie
}