export interface Func1<T1, Ret> {                    //export interface Func1<T> {  这样的写法太陈余
    (a: T1, ...other: T1[]): Ret;                            //    (a: T, b: T, c: T): boolean;   
}                                                                     //}

export interface Func2<T1, T2, Ret> {
    (a: T1, b: T2, ...other: T1[] | T2[]): Ret;
}

export interface Func3<T1, T2, T3, Ret> {
    (a: T1, b: T2, c: T3, ...other: T1[] | T2[] | T3[]): Ret;
}

export interface Func4<T1, T2, T3, T4, Ret> {
    (a: T1, b: T2, c: T3, d: T4, ...other: T1[] | T2[] | T3[]): Ret;
}

export interface FuncZero<Ret> {
    (): Ret;
}