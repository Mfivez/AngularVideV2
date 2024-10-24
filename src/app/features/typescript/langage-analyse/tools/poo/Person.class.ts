class Personne {
    nom: string
    age: number

    constructor(nom:string, age: number) {
        this.nom = nom
        this.age = age
    }

    sayHello(): void {
        console.log(`Bonjour, je suis ${this.nom}`)
    }
}

let personne = new Personne("Mauritcio", 23)
personne.sayHello()