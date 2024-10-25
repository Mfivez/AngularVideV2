interface User {
    id: number;
    name: string;
    email: string;
}

let userUpdate: Partial<User> = { email: "new.email@example.com" }; // Seul `email` est mis à jour

////////////////

let u: Readonly<User> = { id: 1, name: "Mongo", email: "mongo@example.com" };
//u.id = 2; // Erreur, lecture seule ❗

////////////////

type UserContactInfo = Pick<User, "email" | "name">;