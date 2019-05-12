import { Func1, Func2 } from '../Tools/Func'

export function testFun1(f: Func1<number,boolean>) { 
    return f(1, 2, 4, 5) ? '是升序' : '不是升序';
}

export function testFun2(f: Func2<string, string, number>) { 
    return `第 ${f('asdc', 'd')} 位`;
}