class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
export interface NotOkay {
    [x: number]: Dog;
    [x: string]: Dog;
}

export  interface Dictionary {
    name: string;
    defualtAnimal: NotOkay;
    [x: number]: string | NotOkay;//因为使用了number键,通常情况不会跟已定义属性名冲突
    // [x: string]: string;//Erro:value没能完全匹配已定义属性,解决方案是使用元组
}