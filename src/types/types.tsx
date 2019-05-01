import * as React from 'react';
import List from '../Tools/List';
import { model, sort_Asc, sort_Des, showFind } from '../model/model';
import showStu from '../model/sutdent';


export interface msg { msg: string };

enum Color {
    a = 97, b, c, d, e
}
export class Ts extends React.Component<msg, any>{
    render() {
        let modelList: List<model> = new List<model>();
        return (
            <div>
                <h1>{this.props.msg}</h1>

                <hr /><h3>枚举 Enum</h3>
                <p>{Color.a + Color[99]}</p>

                <hr /><h3>interface</h3>
                {
                    <div>
                        <p>初始化一个model{showStu(new model('zhou', 15, ['假如生活抛弃了你', '入我天朝'], [new model('zheng', 14, ['假如生活抛弃了你', '反抗到底'])]))}</p>
                        <p>新增一个model: {modelList.Add(new model('zhou', 15, ['假如生活抛弃了你', '入我天朝']))}</p>
                        <p>移除一个model: {modelList.Remove()}</p>
                    </div>
                }

                <hr /><h3>Find_sort</h3>
                <p>{sort_Des([3, 2, 1, 5, 12, 3, 55])}</p>
                <p>{sort_Asc([3, 2, 1, 5, 12, 3, 55])}</p>
                <p>{sort_Asc(['m', 'a', 'y', 'z', 'b', 'x'])}</p>

                <hr /><h3>Find_sort</h3>
                <p>12的在数组中下标为:{showFind([3, 2, 1, 5, 12, 3, 55], 12)}</p>

                <hr /><h3>List</h3>
                <p>{}</p>
            </div>
        )
    }
}
