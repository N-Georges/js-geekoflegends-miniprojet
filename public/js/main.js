import {Guerrier, Mage, Archer} from "./modules/heros.js";
import Boss from "./modules/boss.js"


// instance de classe Guerrier
let ragnar = new Guerrier("Ragnar", 100, 25, 0)

// instance de classe Mage
let merlin = new Mage("Merlin", 100, 35, 7)

// instance  de classe Archer
let arrow = new Archer("Arrow", 100, 15, 10)

// instance de classe Boss
let sauron = new Boss("Sauron", 140, 45)
let chronos = new Boss("Chronos", 110, 40)
let lilith = new Boss("Lilith", 160, 39)




// script GeekOfLegend
console.log('______________________________________Premier Tour______________________________');
console.log(`Entre dans l'arene: le Boss ${sauron.nom}\nAinsi que les 3 Heros suivant: ${ragnar.nom} le Guerrier, ${merlin.nom} le Mage, ${arrow.nom} l'Archer`);
console.log("#");

// attaque de ragnar face a sauron
console.log(`Vie de ${sauron.nom}: ${sauron.vie}`);
ragnar.attack(sauron)
console.log(`Vie de ${sauron.nom}: ${sauron.vie}`);
ragnar.rage = ragnar.rage +1
console.log(`${ragnar.nom} gagne 1 point de rage.\nVoici ses point de rage: ${ragnar.rage}`);
console.log("#\n#");

// attaque du sauron contre merlin
sauron.attack(merlin)

// attaque de merlin face a sauron
merlin.attack(sauron)
console.log(`Vie de ${sauron.nom}: ${sauron.vie}`);
merlin.mana = merlin.mana -2
console.log(`${merlin.nom} perd 2 point de mana.\nVoici ses point de mana: ${merlin.mana}`);
console.log("#\n#");

// attaque de arrow face a sauron
arrow.attack(sauron)
console.log(`Vie de ${sauron.nom}: ${sauron.vie}`);
arrow.fleches = arrow.fleches -2
console.log(`${arrow.nom} consomme 2 fleches par attaque.\nVoici le reste de fleches: ${arrow.fleches}`);

// lancement de l'enigme
if (Boss.vie <= 20) {
    sauron.enigme()
}else{
    console.log(`${sauron.nom} vous a vaincu`);
}



console.log('______________________________________Deuxieme Tour______________________________');
console.log(`Entre dans l'arene: le Boss ${chronos.nom}\nAinsi que les 3 Heros suivant: ${ragnar.nom} le Guerrier, ${merlin.nom} le Mage, ${arrow.nom} l'Archer`);
console.log("#");

// attaque de arrow face a chronos
console.log(`Vie de ${chronos.nom}: ${chronos.vie}`);
arrow.attack(chronos)
console.log(`Vie de ${chronos.nom}: ${chronos.vie}`);
arrow.fleches = arrow.fleches -2
console.log(`${arrow.nom} consomme 2 fleches par attaque.\nVoici le reste de fleches: ${arrow.fleches}`);
console.log("#\n#");

// attaque de merlin face a chronos
merlin.attack(chronos)
console.log(`Vie de ${chronos.nom}: ${chronos.vie}`);
merlin.mana = merlin.mana -2
console.log(`${merlin.nom} perd 2 point de mana.\nVoici ses point de mana: ${merlin.mana}`);
console.log("#\n#");

// attaque du sauron contre merlin
chronos.attack(arrow)

// attaque de ragnar face a chronos
ragnar.attack(chronos)
console.log(`Vie de ${chronos.nom}: ${chronos.vie}`);
ragnar.rage = ragnar.rage +1
console.log(`${ragnar.nom} gagne 1 point de rage.\nVoici ses point de rage: ${ragnar.rage}`);

// lancement de l'enigme
// if (chronos.vie <= 20) {
//     chronos.enigme()
// }else{
//     console.log(`${chronos.nom} vous a vaincu`);
// }



console.log('______________________________________Troisieme Tour______________________________');
console.log(`Entre dans l'arene: le Boss ${lilith.nom}\nAinsi que les 3 Heros suivant: ${ragnar.nom} le Guerrier, ${merlin.nom} le Mage, ${arrow.nom} l'Archer`);
console.log("#");

// attaque de merlin face a sauron
merlin.attack(lilith)
console.log(`Vie de ${lilith.nom}: ${lilith.vie}`);
merlin.mana = merlin.mana -2
console.log(`${merlin.nom} perd 2 point de mana.\nVoici ses point de mana: ${merlin.mana}`);
console.log("#\n#");

// attaque de merlin face a chronos
ragnar.attack(lilith)
console.log(`Vie de ${lilith.nom}: ${lilith.vie}`);
ragnar.rage = ragnar.rage +1
console.log(`${ragnar.nom} gagne 1 point de rage.\nVoici ses point de rage: ${ragnar.rage}`);

// attaque de arrow face a chronos
console.log(`Vie de ${lilith.nom}: ${lilith.vie}`);
arrow.attack(lilith)
console.log(`Vie de ${lilith.nom}: ${lilith.vie}`);
arrow.fleches = arrow.fleches -2
console.log(`${arrow.nom} consomme 2 fleches par attaque.\nVoici le reste de fleches: ${arrow.fleches}`);
console.log("#\n#");

// lancement de l'enigme
if (lilith.vie <= 20) {
    lilith.enigme()
}else{
    console.log(`${lilith.nom} vous a vaincu`);
}


