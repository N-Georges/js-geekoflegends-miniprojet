import Personnnages from "./personnages.js";


// TODO Tous les tours le guerrier gagne 1 point de rage au bout de 4 points ,le guerrier gagne 25% ( * 1.25 ) d'attaque supplémentaire durant 1 tours puis retombe à 0 de rage et perd ce bonus.
// classe Guerrier
class Guerrier extends Personnnages {
    constructor (nom, vie, attaque, rage){
        super(nom, vie, attaque)
        this.nom = nom
        this.vie = vie
        this.attaque = attaque
        this.rage = rage
        this.attack = () => {
            this.attaque = attaque * 1.4
            this.vie = vie - (vie * 0.75)
        }
        this.defense = () => {
            this.attaque = attaque - (attaque * 0.5)
            this.vie = vie + (vie * 2.5)
        }
    }

}

let ragnar = new Guerrier("ragnar", 100, 25, 0)




// TODO Les attaques du mage lui coute 2 points quand il n'a plus assez de point de mana pour attaquer,il passe 1 tour sans attaquer et il récupère 7 points de mana
// classe Mage 
let nbrMana = [7, 9, 11]
class Mage extends Personnnages {
    constructor (nom, vie, attaque, mana){
        super(nom, vie, attaque)
        this.nom = nom
        this.vie = vie
        this.attaque = attaque
        this.mana = mana //TODO chiffre qui sera aléatoirement imposé entre les suivants 7, 9 ou 11.Math.floor((Math.random)*nbrMana)
        this.attack = () => {
            this.attaque = attaque * 1.4
            this.vie = vie - (vie * 0.75)
        }
        this.defense = () => {
            this.attaque = attaque - (attaque * 0.5)
            this.vie = vie + (vie * 2.5)
        }
    }

}

let merlin = new Mage("Merlin", 100, 35, 7)




// TODO les attaques de l'archer consomme deux flèches par tour et récupère une flèche chaque tour.Quand il n'a plus de flèches il passe un tour et récupère 6 flèches.
// classe archer
// let nbrFleches = [7, 8, 9, 10]
class Archer extends Personnnages {
    constructor (nom, vie, attaque, fleches){
        super(nom, vie, attaque)
        this.nom = nom
        this.vie = vie
        this.attaque = attaque
        this.fleches = fleches //TODO chiffre qui sera aléatoirement imposé entre 7, 8 , 9 ,10 ,11. Math.floor((Math.random)*nbrFleches)
        this.attack = () => {
            this.attaque = attaque * 1.4
            this.vie = vie - (vie * 0.75)
        }
        this.defense = () => {
            this.attaque = attaque - (attaque * 0.5)
            this.vie = vie + (vie * 2.5)
        }
    }

}

let arrow = new Archer("arrow", 100, 15, 10)



export {Guerrier, Mage, Archer}