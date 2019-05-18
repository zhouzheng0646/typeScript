import { Func1, Func2 } from './Func'
var Func = <T>(a: T, b: T) => Boolean;

//function sort<T>(v1: T[], func: any = <T>(a: T, b: T) => a < b): T[] {
// function sort<T>(v1: T[], func: <Tv>(a: Tv, b: Tv) => boolean = <T>(a: T, b: T) => a < b): T[] {
export function sort<T>(v1: T[], func: Func2<T, T, boolean> = Descending): T[] {
    let temp: T;
    for (let i = 0; i < v1.length - 1; i++) {
        for (let j = i + 1; j < v1.length; j++) {
            if (func(v1[i], v1[j])) {
                temp = v1[i];
                v1[i] = v1[j];
                v1[j] = temp;
            }
        }
    }
    return v1;
}

// function find<T>(v1: T[], opt: T, func: <T>(a: T, b: T) => boolean) {
export function find<T>(v1: T[], opt: T, func: Func2<T,T, boolean>) {
    for (let i = 0; i < v1.length; i++) {
        if (func(v1[i], opt)) {
            return i;
        }
    }
    return -1;
}

export function showFind<T>(v1: T[], opt: T) {
    return find(v1, opt, <T>(a: T, b: T) => a == b);
}

export function sort_Des<T>(v1: T[]) {
    return sort(v1).map((m) => { return m + ' ' });
}

export function sort_Asc<T>(v1: T[]) {
    return sort(v1, Ascending).map((m) => { return m + ' ' });
}

//-------谓词-------//
// 升序
function Ascending<T>(a: T, b: T) {
    return a > b;
}

// 降序
function Descending<T>(a: T, b: T) {
    return a < b;
}