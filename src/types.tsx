import * as React from 'react';
import List from './Tools/List';
import Lists from './Tools/Lists';
import { model } from './model/model';
import { sort, sort_Asc, sort_Des, find, showFind } from './Tools/Sort_Find';
import showStu from './model/sutdent';
import { testFun1, testFun2 } from './model/fuc';
import { printDog } from './model/dog';
import showDictionary from './model/dictionary';
import showSymbol from './model/symbol';
import showIteration from './model/iterator';
import showQueryable from './model/Queryable';
import showOrderByThen from './model/OrderByThen';
//import Login from './ReactDome/login';


export interface msg { msgs: string };

enum Color {
    a = 97, b, c, d, e
}

export class Ts extends React.Component<msg, any>{
    render() {
        let modelLists: List<model> = new List<model>();
        let modelList: Lists<model> = new Lists<model>();
        return (
            <div>
                <h1>{this.props.msgs}</h1>
                {/* 枚举 */}
                <hr /><h3>枚举 Enum</h3>
                <p>{Color.a + Color[99]}</p>

                {/* class */}
                <hr /><h3>Class</h3>
                {
                    <div>
                        <p>注册一个学生{showStu(new model('zhou', 15, ['假如生活抛弃了你', '入我天朝']))}</p>
                        <h2>List</h2>
                        <p>新增一个model: {modelList.Add(new model('默认', 0, ['默认', '反抗到底']))}</p>
                        <p>zhou比zheng{(new model('zhou', 15, ['假如生活抛弃了你', '入我天朝']).find(new model('zheng', 14, ['假如生活抛弃了你', '反抗到底']), (a, b) => a.age > b.age) ? '大' : '小')}</p>
                        <p>移除一个model: {modelList.Remove()}</p>

                        <h2>Listn</h2>
                        <p>新增一个models: {modelLists.Add(new model('默认', 0, ['默认', '反抗到底'])).length}</p>
                        <p>新增一个models: {modelLists.Add(new model('大傻子', 0, ['默认', '反抗到底'])).length}</p>
                        <p>models0: {modelLists[0].name}</p>
                        <p>models1: {modelLists[1].name}</p>
                    </div>
                }

                {/* Interface */}
                <hr /><h3>Interface</h3>
                <p>动物信息: {printDog({ type: '哈士奇', sex: '公', leg: 4, call: '汪汪' })}</p>

                {/* Find_sort */}
                <hr /><h3>Find_sort</h3>
                <p>数字降序{sort_Asc([3, 2, 1, 5, 12, 3, 55])}</p>
                <p>数字升序{sort_Des([3, 2, 1, 5, 12, 3, 55])}</p>
                <p>字符升序{sort(['m', 'a', 'y', 'z', 'b', 'x'], (a, b) => a > b).map(m => m + ' ')}</p>
                <p>12的在数组中第: {showFind([3, 2, 1, 5, 12, 3, 55], 12) + 1} 位</p>
                <p>55的在数组中第: {find([3, 2, 1, 5, 12, 3, 55], 55, (a, b) => a == b) + 1} 位</p>

                <hr /><h3>Func</h3>
                <p>4个数字比大小: {testFun1((a, b, c, d) => a < b && b < c && c < d)}</p>

                <p>
                    查找字符在字符串的位置:
                    {testFun2((a, b) => {
                        for (let i = 0; i < a.length; i++) {
                            if (a[i] == b) return ++i;
                        }
                        return -1;
                    })}
                </p>

                <hr /><h3>Dictionary</h3>
                <p>Dictionary使用: {showDictionary({ name: 'dictionary', defualtAnimal: { [0]: { name: '大白', breed: '哈士奇' } }, [0]: { [0]: { name: '狗蛋', breed: '中华田园犬' } } })}</p>

                <hr /><h3>Symbol</h3>
                <p>Symbol是唯一的: {showSymbol()}</p>

                <hr /><h3>showList</h3>
                <p>iterator: {showIteration()}</p>

                <hr /><h3>showQueryable</h3>
                <p>iterator: {showQueryable()}</p>

                <hr /><h3>showOrderByThen</h3>
                <p>showQueryable: {showOrderByThen().OrderBy((m, ms) => m.age < ms.age).Where(m => m.age > 10).forEach((m) => {
                    return <div key={m.num}>{`编号:${m.num} 年龄:${m.age} 住址:${m.address} 姓名:${m.name} 性别:${m.sex} 爱看的书:${m.book.map(b => b)}`}</div>
                })}</p>

            </div>
        )
    }
}
