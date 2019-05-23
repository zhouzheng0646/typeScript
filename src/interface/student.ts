enum Sex { 
    男, 女
}
export default class Studnet {
    constructor(num: number, age: number, address: string, name: string, sex: Sex, book: Array<string>) {
        this.num = num;
        this.age = age;
        this.address = address;
        this.name = name;
        this.sex = sex;
        this.book = book;
    }
    // 编号
    num: number;
    // 年龄
    age: number;
    // 住址
    address: string;
    // 姓名
    name: string;
    // 性别
    sex: Sex;
    // 爱看的书
    book: string[];
}