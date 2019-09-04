import List from '../Tools/List'

export default function showQueryable() {
    const x = 3;
    let alist = new List<number>();
    alist.Add(1).Add(3).Add(5).Add(7).Add(9);

    let joinArr = new List<number>();
    joinArr.Add(10).Add(8).Add(6).Add(4).Add(2);
    alist.Insert(joinArr);

    alist.OrderBy((a, b) => a > b);

    let alistSikp= alist.Skip(4);
    let alistSikps = alist.SkipLast(4);
    console.log('...alistSikp', ...alistSikp);
    console.log('...alistSikps', ...alistSikps);
    console.log('length: ', alist.length);
    
    alistSikp[5] = 123;//虽然有效,但是不建议这样赋值
    console.log('alistSikp[5]', alistSikp[5]);

    alist.forEach(m => {
        console.log('forEach: ', m);
    });

    let arr = [...alist];
    for (const item of arr) {
        console.log('..arr: ', item);
    }


    return (`--->Where: ${alist.Where((a) => a > 5)}<---
    --->Where: ${alist.Where<number>((a, b) => a < b * 2)}<---
    --->FirstOrDefault:: ${alistSikp.FirstOrDefault()}<---
    --->LastOrDefault:: ${alistSikps.LastOrDefault()}<---
    `);
}