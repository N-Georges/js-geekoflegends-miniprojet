import Personnnages from "./personnages";

class Guerrier extends Personnnages {
    constructor (nom, vie, attaque){
        super(nom, vie, attaque)
        this.nom = prompt("choisis le nom de ton Guerrier")
        this.vie = vie
        this.attaque = attaque
        this.rage = 0
    }

}