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
            console.log("attack guerrier");
        }
        this.defense = () => {
            console.log("defense geurrier");
        }
    }

}

let ragnar = new Guerrier("ragnar", 100, 25, 0)



// classe Mage 
class Mage extends Personnnages {
    constructor (nom, vie, attaque, mana){
        super(nom, vie, attaque)
        this.nom = nom
        this.vie = vie
        this.attaque = attaque
        this.mana = mana //TODO chiffre qui sera aléatoirement imposé entre les suivants 7, 9 ou 11.
        this.attack = () => {
            console.log("attack mage");
        }
        this.defense = () => {
            console.log("defense mage");
        }
    }

}

let merlin = new Mage("Merlin", 100, 35, 7)


// classe archer
class Archer extends Personnnages {
    constructor (nom, vie, attaque, fleches){
        super(nom, vie, attaque)
        this.nom = nom
        this.vie = vie
        this.attaque = attaque
        this.fleches = fleches //TODO chiffre qui sera aléatoirement imposé entre 7, 8 , 9 ,10 ,11.
        this.attack = () => {
            console.log("attack archer");
        }
        this.defense = () => {
            console.log("defense archer");
        }
    }

}

let arrow = new Archer("arrow", 100, 15, 10)



export {Guerrier, Mage, Archer}