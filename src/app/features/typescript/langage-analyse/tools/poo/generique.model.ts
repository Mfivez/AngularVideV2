function identity<T>(value: T): T {
    return value
}

let result = identity<string>("Hello")
let result2 = identity<number>(42)
