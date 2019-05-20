import { Func1, Func2, FuncZero } from './Func';

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
    Where(func: Func1<T, boolean>): T;
    Where<Ts>(func: Func2<T, Ts, boolean>): T;
    Where(func: any): any {
        for (let i = 0; i < this.count; i++) {
            if (func(this[i], i)) {
                console.log('---', i, this[i]);
                return this[i];
            }
        }
        return this[0];
    }

    OrderBy(func: Func2<T, T, boolean>): this {
        let temp: T = null;
        for (let i = 0; i < this.count - 1; i++) {
            for (let j = i + 1; j < this.count; j++) {
                if (func(this[i], this[j])) {
                    temp = this[i];
                    this[i] = this[j];
                    this[j] = temp;
                }
            }
        }
        return this;
    }

    Join(joinQueryable:this){
        for (let i = 0; i < joinQueryable.count; i++) {
            this[this.count++] = joinQueryable[i];
        }
        return this;
    }

    Skip(skipIndex: number) {
        let sikpTemp:List<T> = new List<T>();
        if (skipIndex < this.count) {
            let i = 0;
            for (; i < skipIndex; i++)
                sikpTemp[i] = this[i];
            sikpTemp.count = i;
        }
        return sikpTemp;
    }

    SkipLast(skipIndex: number) {
        let sikpTemp = new List<T>();
        if (skipIndex < this.count) {
            let i = 0;
            for (; i < (this.count - skipIndex); i++)
                sikpTemp[i] = this[skipIndex + i];
            sikpTemp.count = i;
        }
        return sikpTemp;
    }

    FirstOrDefault() { 
        return this.FLst(1);
    }
    LastOrDefault() { 
        return this.FLst(this.count);
    }
    private FLst(index: number) {
        if (this.count){
            return this[index - 1];
        }
        else
            return null;
    }
    //#region 增删改
    Remove() {
        this[this.count--] = null;
        return this;
    }

    Add(item: T) {
        this[this.count++] = item;
        return this;
    }
    //#endregion

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

    return?( ): IteratorResult<T>{
        return { value: null, done: true };
    }

}