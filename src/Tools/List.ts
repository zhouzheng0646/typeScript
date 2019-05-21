import { Func1, Func2, FuncZero } from './Func';
import Queryable from './Queryable';

export default class List<T> extends Queryable<T> {
    constructor() {
        super();
    }
}