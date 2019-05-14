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


    let numberArr = function* () {
        yield 'x',
        yield 'y',
        yield 'z'
    }
    let array = {
        1: 'a', 2: 'b', 3: 'c',
        lenght: 3,
        [Symbol.iterator]: Array.prototype[Symbol.iterator]
    }
    let strArray = {
        [Symbol.iterator]: function* () {
            yield 'a';
            yield ['bcd'];
            yield 'e';
        },
    };

    for (const item of array) {
        str += item;
    }
    for (const item of strArray) {
        str += item;
    }
    for (const item of numberArr()) {
        str += item;
    }
    return str;
}
