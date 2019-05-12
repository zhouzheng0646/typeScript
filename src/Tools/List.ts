export default class List<T>{
    constructor() {
        this.model = [];
        this.const = 0;
        this.nextIdex = 0;
    }

    //成员变量
    private model: T[];

    const: number;

    nextIdex: number;

    // 成员函数
    [Symbol.iterator]() { return this; }

    next(): IteratorResult<T> {
        return this.const > this.nextIdex ? { value: this.model[this.nextIdex++], done: false } : { value: null, done: true };
    }



    Remove() {
        this.model.pop();
        return --this.const;
    }

    Add(item: T) {
        this.model.push(item);
        return ++this.const;
    }
}