export default class List<T>{
    constructor() {
        this.model = [];
        this.const = 0;
        this.move = 0;
    }

    const: number;
    private model: T[];
    private move: number;

    Remove() {
        this.model.pop();
        return --this.const;
    }

    Add(item: T) {
        this.model.push(item);
        return ++this.const;
    }
}