export default class List<T>{
    constructor() {
        this.model = [];
        this.const = 0;
    }

    private model: T[];

    const: number;


    Remove() {
        this.model.pop();
        return --this.const;
    }

    Add(item: T) {
        this.model.push(item);
        return ++this.const;
    }
}