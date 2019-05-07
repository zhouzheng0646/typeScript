import { pet, Func, Func2, Func3 } from '../interface/interface'

export interface Dog extends pet {
    readonly type: string;
    [propName: string]: any;

    // resume(_sex: string, _leg: number): string;
}

export function printDog(dog: Dog) {
    // dog.type = '猫'; error type为只读
    return `这是一只${dog.type},性别${dog.sex},有${dog.leg}条腿,其他特征${dog['call']}`;
}

export function testFun(f: Func<number>) { 
    return f(1, 2, 4, 2) && '123';
}

export function testFun2(f: Func2<string,string>) { 
    return `第一个想等的字符在字符串中第${f('asdc', 'd')}位`;
}

export function testFun3(f: Func3<number, boolean>) { 
    return f(1, 2) && '真';
}
