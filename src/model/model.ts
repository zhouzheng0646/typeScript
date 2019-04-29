export class model {
    constructor(name: string, age: number, book: string[]) {
        this.name = name;
        this.age = age;
        this.book = book;
    }
    name: string;
    age: number;
    book: string[];
}

function find<T>(v1: T[], func: <Tv>(a: Tv, b: Tv) => boolean): T[] {
    let temp: T;
    for (let i = 0; i < v1.length - 1; i++) {
        for (let j = i + 1; j < v1.length; j++) {
            if (func(v1[i], v1[j])) {
                temp = v1[i];
                v1[i] = v1[j];
                v1[j] = temp;
            }
        }
    }
    return v1;
}

function sum<T>(a: T, b: T) {
    return a > b;
}

export function show<T>(v1: T[]) {
    let msg = find(v1, sum);
    return msg.map((m) => { return m + ' ' });
}
