export default class List<T>{
    constructor() {
        this.const = 0;
        this.nextIdex = 0;
    }

    //成员变量
    const: number;
    
    [x: number]: T;

    private nextIdex: number;

    // 成员函数
    [Symbol.iterator]() { return this; }

    next(): IteratorResult<T> {
        return this.const > this.nextIdex ? { value: this[this.nextIdex++], done: false } : { value: null, done: true };
    }

    Remove() {
        this[this.const] = null;
        return --this.const;
    }

    Add(item: T) {
        this[this.const] = item;
        return ++this.const;
    }
}