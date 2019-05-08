import * as React from 'react';
import List from './Tools/List';
import { model } from './model/model';
import { sort, sort_Asc, sort_Des, find, showFind } from './Tools/Sort_Find';
import showStu from './model/sutdent';
import { testFun1, testFun2 } from './model/fuc';
import { printDog } from './model/dog';


export interface msg { msgs: string };

enum Color {
    a = 97, b, c, d, e
}
export class Ts extends React.Component<msg, any>{
    render() {
        let modelList: List<model> = new List<model>();
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
                        <p>新增一个model: {modelList.Add(new model('默认', 0, ['默认', '反抗到底']))}</p>
                        <p>zhou比zheng{(new model('zhou', 15, ['假如生活抛弃了你', '入我天朝']).find(new model('zheng', 14, ['假如生活抛弃了你', '反抗到底']), (a, b) => a.age > b.age) ? '大' : '小')}</p>
                        <p>移除一个model: {modelList.Remove()}</p>
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
                <p>55的在数组中第: {find([3, 2, 1, 5, 12, 3, 55], 55, (a, b) => a == b)+ 1} 位</p>
                
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
            </div>
        )
    }
}
