import List from '../Tools/List'
import Lists from '../Tools/Lists'
import { string } from 'prop-types';

export default function showIteration() {
    let alist = new List<number>();
    alist.Add(1);
    alist.Add(2);
    alist.Add(3);
    let str: string = '';
    for (const itme of alist) {
        str += itme;
    }
    return str;
}