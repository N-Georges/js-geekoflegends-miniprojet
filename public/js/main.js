import Personnnages from "./modules/personnages.js";
import {Guerrier, Mage, Archer} from "./modules/heros.js";
import Boss from "./modules/boss.js"


// instance de classe Guerrier
let ragnar = new Guerrier("ragnar", 100, 25, 0)

// instance de classe Mage
let merlin = new Mage("Merlin", 100, 35, 7)

// instance  de classe Archer
let arrow = new Archer("arrow", 100, 15, 10)

// instance de classe Boss
let sauron = new Boss("Sauron", 100, 45)
let chronos = new Boss("Chronos", 100, 40)
let lilith = new Boss("Lilith", 100, 39)



