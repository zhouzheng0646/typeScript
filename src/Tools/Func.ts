export interface Func1<T1, Ret> {                    //export interface Func1<T> {  这样的写法太陈余
    (a: T1): Ret;                                    //    (a: T, b: T, c: T): boolean;   
}                                                    //}

export interface Func2<T1, T2, Ret> {
    (a: T1, b: T2): Ret;
}

export interface Func3<T1, T2, T3, Ret> {
    (a: T1, b: T2, c: T3): Ret;
}

export interface Func4<T1, T2, T3, T4, Ret> {
    (a: T1, b: T2, c: T3, d: T4): Ret;
    // (a: T1, b: T2, c: T3, d: T4, ...other: T1[] | T2[] | T3[]): Ret; 这里使用联合类型就失去了Func本身的意义了,应该在实现时给相同的类型
}

export interface FuncZero<Ret> {
    (): Ret;
}