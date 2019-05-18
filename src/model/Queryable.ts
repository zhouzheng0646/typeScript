import List from '../Tools/List'

export default function showQueryable() {
    const x = 3;
    let alist = new List<number>();
    alist.Add(4).Add(2).Add(3).Add(7).Add(2);
    alist.OrderBy((a, b) => a < b);
    for (const item of alist) {
        console.log('order', item);
    }
    return (`--->Where: ${alist.Where((a) => a > 5)}<---
    --->Where: ${alist.Where<number>((a, b) => a < b * 2)}<---
    `);
}