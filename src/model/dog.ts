import pet from '../interface/pet'

export interface Dog extends pet {
    readonly type: string;
    [key: string]: string | number;

    // resume(_sex: string, _leg: number): string;
}

export function printDog(dog: Dog) {
    // dog.type = '猫'; error type为只读
    return `这是一只${dog.type},性别${dog['sex']},有${dog.leg}条腿,其他特征${dog['call']}`;
}

