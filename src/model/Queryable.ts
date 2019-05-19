import List from '../Tools/List'

export default function showQueryable() {
    const x = 3;
    let alist = new List<number>();
    alist.Add(4).Add(2).Add(3).Add(7);

    let joinArr = new List<number>();
    joinArr.Add(5).Add(6).Add(8).Add(1);
    alist.Join(joinArr);

    alist.OrderBy((a, b) => a > b);

    let alistSikp = alist.Skip(5);
    let alistSikps = alist.SkipLast(5);
    console.log(alistSikp);
    console.log(alistSikps);
    for (const item of alistSikp) {
        console.log('Skip', item);
    }
    for (const item of alist) {
        console.log('order', item);
    }
    return (`--->Where: ${alist.Where((a) => a > 5)}<---
    --->Where: ${alist.Where<number>((a, b) => a < b * 2)}<---
    `);
}