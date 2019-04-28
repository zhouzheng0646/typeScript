export default class model {
    constructor(name: string, age: number, book: string[]) {
        this.name = name;
        this.age = age;
        this.book = book;
    }
    name: string;
    age: number;
    book: string[];
}

export class Fun<Ta, Tb, ret> {
}