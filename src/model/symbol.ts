
export default function showSymbol() {
    let sym2 = Symbol("key");
    let sym3 = Symbol("key");
    return sym2 != sym3 ? '对' : '不对';
}