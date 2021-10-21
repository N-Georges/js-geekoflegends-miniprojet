import Personnnages from "./personnages.js";


class Boss extends Personnnages{
    constructor (nom, vie, attaque){
        super(nom, vie, attaque)
        this.nom = nom
        this.vie = vie
        this.attaque = attaque
        this.enigme = () => {
            let egnima1 = prompt("Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?").toLowerCase()
            let egnima1Result = "le silence"
            let engnima1ResultVariante = "silence"
            // let egnima2 = prompt("Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ?")
            // let egnima2Result = "le courant"
            // let egnima3 = prompt("On me dépose sur une table, on me coupe, on me sert, mais pourtant on ne me mange pas ! Qui suis-je ?")
            // let egnima3Result = "Un jeu de cartes"
            // let reponse = prompt("entre ta reponse a l'egnime")
            if (this.vie >= 20 && egnima1 == egnima1Result || egnima1 == engnima1ResultVariante) {
                console.log(`felicitations tu a vaincu ${this.nom} tu a repondu : ${egnima1Result}`); 
            }else{
                console.log(`Malheuresement tu a echouer a l'enigme, tu est condamner a mort par ${this.nom}\nLa bonne reponse etait: ${egnima1Result}`); 
            }
        }
        this.attack = (a) => {
            a.vie = a.vie - this.attaque
            console.log(`${this.nom} lance une attaque de ${this.attaque} contre ${a.nom}\nVie de ${a.nom}: ${a.vie}`);
            if (a.vie <= 0) {
                console.log(`${a.nom} est mort`);
            }
        }
    }
}

let sauron = new Boss("Sauron", 120, 45)
let chronos = new Boss("Chronos", 110, 30)
let lilith = new Boss("Lilith", 160, 39)



export default Boss
