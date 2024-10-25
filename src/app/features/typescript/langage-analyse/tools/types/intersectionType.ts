interface Animal {
    nom: string;
    age: number;
}

interface Véhicule {
    nbRoues: number;
}

type AnimalVéhicule = Animal & Véhicule

let animal: AnimalVéhicule = { 
    nom:"Félix à 3 pattes", age:25, nbRoues:1 
}