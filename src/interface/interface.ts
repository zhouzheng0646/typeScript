import model from '../model/model';

export class student extends model {
    constructor(name: string, age: number, book: string[]) {
        super(name, age, book);
    }
}

export default function showStu(stu: model): string {
    let mode: student = stu;
    mode.name = "zhouzheng";
    mode.age = 15;
    return `我的名字叫${mode.name},今年${mode.age},我爱看的书有:${mode.book.map((m) => { return m })}`;
}
