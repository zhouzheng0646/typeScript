import { Func1, Func2 } from './Func';
export default class Queryable<T> {
    constructor(struct?: Array<T>) {
        this.structCount = 0;
        this.nextIdex = 0;
        if (struct !== undefined) {
            for (let i = 0; i < struct.length; i++)
                this[i] = struct[i];
        }
    }

    //#region  成员变量
    private nextIdex: number;

    private structCount: number;
    public get length(): number {
        return this.structCount;
    }

    [x: number]: T;
    //#endregion

    //#region 成员函数
    Where(func: Func1<T, boolean>): Queryable<T>;
    Where<Ts>(func: Func2<T, Ts, boolean>): Queryable<T>;
    Where(func: any): any {
        let Temp: Queryable<T> = new Queryable<T>();
        for (let i = 0; i < this.structCount; i++)
            if (func(this[i], i))
                Temp.Add(this[i]);
        return Temp;
    }

    OrderBy(func: Func2<T, T, boolean>): this {
        let temp: T = null;
        for (let i = 0; i < this.structCount - 1; i++) {
            for (let j = i + 1; j < this.structCount; j++)
                if (func(this[i], this[j])) {
                    temp = this[i];
                    this[i] = this[j];
                    this[j] = temp;
                }
        }
        return this;
    }

    // then(func: Func2<T, T, boolean>): this {
    //     return this.OrderBy(func);
    // }

    forEach(func: Func2<T, number, any>) {
        let Temp: Queryable<T> = new Queryable<T>();
        for (let i = 0; i < this.structCount; i++)
            Temp.Add(func(this[i], i));
        return Temp;
    }

    Insert(joinQueryable: this) {
        for (let i = 0; i < joinQueryable.structCount; i++)
            this[this.structCount++] = joinQueryable[i];
        return this;
    }

    Skip(skipIndex: number) {
        let sikpTemp = new Queryable<T>();
        if (skipIndex < this.structCount) {
            let i = 0;
            for (; i < skipIndex; i++)
                sikpTemp[i] = this[i];
            sikpTemp.structCount = i;
        }
        return sikpTemp;
    }

    SkipLast(skipIndex: number) {
        let sikpTemp = new Queryable<T>();
        if (skipIndex < this.structCount) {
            let i = 0;
            for (; i < (this.structCount - skipIndex); i++)
                sikpTemp[i] = this[skipIndex + i];
            sikpTemp.structCount = i;
        }
        return sikpTemp;
    }

    FirstOrDefault() {
        return this.FLst(1);
    }
    LastOrDefault() {
        return this.FLst(this.structCount);
    }
    protected FLst(index: number) {
        if (this.structCount)
            return this[index - 1];
        else
            return null;
    }

    //#region 增删改
    Remove() {
        this[this.structCount--] = null;
        return this;
    }

    Add(item: T) {
        this[this.structCount++] = item;
        return this;
    }
    //#endregion
    //#endregion

    //#region 迭代器
    [Symbol.iterator](): IterableIterator<T> {
        return this;
    };

    next(value: number = this.nextIdex++): IteratorResult<T> {
        if (this.structCount > value)
            return { value: this[value], done: false };
        else {
            this.nextIdex = 0;                      // 指向头部
            return { value: null, done: true };
        }
    }

    return?(): IteratorResult<T> {
        return { value: null, done: true };
    }
    //#endregion
}
