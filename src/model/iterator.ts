import List from '../Tools/List'
import Lists from '../Tools/Lists'

export default function showIteration() {
    let alist = new Lists<number>();
    alist.Add(1);
    alist.Add(2);
    alist.Add(3);
    let str: string = '';
    for (const itme of alist) {
        str += itme;
    }
    return str;
}