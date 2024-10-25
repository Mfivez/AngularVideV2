
let personName: string | null = "Martin"
personName = null

///////////////

let myAge: number | undefined

console.log(myAge) // undefined
myAge = 23
console.log(myAge) // 23

///////////////

function logMessage(message: string): void {
    console.log(message)
}

logMessage("Bonjour Mister Hello World !")

///////////////

let inputValue: unknown = "Hello";
if (typeof inputValue === "string") {
    console.log(inputValue.toUpperCase()); 
}

///////////////

function throwError(message: string): never {
    throw new Error(message);
}