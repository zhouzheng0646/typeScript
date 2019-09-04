import List from '../Tools/List'

export default function showIteration() {
    let str: string = '';

    let alist = new List<number>();
    alist.Add(1).Add(2).Add(3).Add(4).Add(5);
    str += linkStr(alist) + '\t';

    let va = alist.next();
    while (!va.done) {
       str += va.value;
       va = alist.next();
    }

    let array = {
        1: 'a', 2: 'b', 3: 'c',
        lenght: 3,
        [Symbol.iterator]: Array.prototype[Symbol.iterator]
    }
    str += linkStr(array) + '\t';;

    let numberArr = function* () {
        yield 'x',
        yield 'y',
        yield 'z'
    }
    str += linkStr(numberArr()) + '\t';;

    let strArray = {
        [Symbol.iterator]: function* () {
            yield 'a';
            yield ['bcd'];
            yield 'e';
        },
    };
    str += linkStr(strArray) + '\t';

    const str1Arrar = strArray[Symbol.iterator]();
    str += linkStr(str1Arrar) + '\t';



    showMapAndSet();
    return str;
}

function linkStr(arr: any) {
    let str: string = '';
    for (const item of arr) {
        str += item;
    }
    return str;
}

function showMapAndSet() { 
    console.log('---->Set<-----')
    var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
    for (var e of engines) {
      console.log(e);
    }
    console.log('---->Map<-----')
    const es6 = new Map();
    es6.set("edition", 6);
    es6.set("committee", "TC39");
    es6.set("standard", "ECMA-262");
    for (const [name, value] of es6) {
        console.log(name + ": " + value);
    }
    for (const item of ['a', 1].entries()) {
        console.log(item)
    }
}
