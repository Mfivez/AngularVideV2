class Employee extends Personne {
    poste: string

    constructor(nom: string, age: number, poste: string) {
        super(nom, age)
        this.poste = poste
    }

    describeJob(): void {
        console.log(`${this.nom} travaille en tant que ${this.poste}.`);
    }
}

let employee1 = new Employee("Mauritcio", 23, "Développeur");
employee1.describeJob()