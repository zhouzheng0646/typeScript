import List from './List';
import { Func1 } from './Func';
export default abstract class Queryable<T> implements IterableIterator<T> {
    abstract [Symbol.iterator](): IterableIterator<T>;

    abstract next(value?: any): IteratorResult<T>;

    abstract count: number;

    [x: number]: T;

    Where<Ts>(func: Func1<T, boolean>): T {
        for (let i = 0; i < this.count; i++) {
            if (func) {
                return this[i];
            }
        }
        return this[0];
    }
}
