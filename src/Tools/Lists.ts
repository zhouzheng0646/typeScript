enum index {
    a = 'a', b = 'b', c = 'c', d = 'd'
}
export default class List<T> implements Iterable<T>{
    constructor() {
        this.model = [];
        this.count = 0;
        this.nextIdex = 0;
    }

    //#region  成员变量
    private model: T[];
    count: number;
    nextIdex: number;
    //#endregion


    //#region 成员函数
    Remove() {
        this.model.pop();
        return --this.count;
    }

    Add(item: T) {
        this.model.push(item);
        return ++this.count;
    }
    //#endregion


    //#region 迭代器
    [Symbol.iterator](): Iterator<T> {
        let ts = this;
        return {
            next(value: number = ts.nextIdex++): IteratorResult<T> {
                return ts.count > value ? { value: ts.model[value], done: false } : { value: null, done: true };
            }
        }
    };
    //#endregion
}
