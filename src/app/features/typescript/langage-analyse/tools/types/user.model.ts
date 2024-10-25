interface user {
    nom: string,
    age: number,
    isAdmin?: boolean // Propriété optionnelle
}

function getUserInfo(user: user): string {
    return `Name: ${user.nom}, Age: ${user.age}`;
}


const user1: user = {
    nom: "Mauritcio", age: 23, isAdmin: true
}

const user2: user = {
    nom: "Hongo", age:24
}