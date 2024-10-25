function greet(name: string, greeting: string = "Bonjour"): string {
    return `${greeting}, ${name}!`;
}

console.log(greet("Michel")) // "Bonjour, Michel!"
console.log(greet("Michel", "Hello")) // "Hello, Michel!"

const square = (x: number): number => x * x;
console.log(square(5))