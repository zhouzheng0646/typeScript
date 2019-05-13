import List from '../Tools/List'
import Lists from '../Tools/Lists'
import { func } from 'prop-types';

export default function showIteration() {
    let alist = new Lists<number>();
    alist.Add(1).Add(2).Add(3).Add(4).Add(5);
    let str: string = '';
    for (const itme of alist) {
        str += itme;
    }
    let va = alist.next();
    while (!va.done) {
        str += va.value;
        va = alist.next();
    }
    let array = {
        1: 'a', 2: 'b', 3: 'c',
        lenght: 3,
        [Symbol.iterator]: function* () {
            yield 1;
            yield 2;
            yield 3;
          },
        // [Symbol.iterator]() { return {
        //     next(): IteratorResult<number> {
        //         console.log(this[0]);
        //         return {value:this[0],done:true};
        //     }
        // } }
    };
    for (const item of array) {
        str += item;
    }
    return str;
}

function ad<T>(): Iterator<T> {
    return {
        next(): IteratorResult<T> {
            return;
        }
    }
}