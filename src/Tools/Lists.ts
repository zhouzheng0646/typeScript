
export default class List<T> implements IterableIterator<T>{
    constructor() {
        this.count = 0;
        this.nextIdex = 0;
    }

    //#region  成员变量
    private nextIdex: number;
    count: number;
    [x: number]: T;
    //#endregion


    //#region 成员函数
    Remove() {
        this[this.count--] = null;
        return this;
    }

    Add(item: T) {
        this[this.count++] = item;
        return this;
    }
    //#endregion

    // //#region 迭代器
    [Symbol.iterator](): IterableIterator<T> {
        return this;
    };

    next(value: number = this.nextIdex++): IteratorResult<T> {
        if (this.count > value)
            return { value: this[value], done: false };
        else {
            this.nextIdex = 0;                      // 指向头部
            return { value: null, done: true };
        }
    }
}