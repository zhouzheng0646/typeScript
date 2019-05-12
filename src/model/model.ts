export class model {
    constructor(name: string, age: number, book: string[]) {
        this.name = name;
        this.age = age;
        this.book = book;
    }
    name: string;
    age: number;
    book: string[];

    find(opt: model, func: (a: model, b: model) => boolean) {
        return func(this, opt);
    }
}
