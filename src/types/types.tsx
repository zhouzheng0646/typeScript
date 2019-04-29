import * as React from 'react';
import { model, sort_Asc, sort_Des, showFind } from '../model/model';
import showStu from '../interface/interface';


export interface msg { msg: string };

enum Color {
    a = 97, b, c, d, e
}
export class Ts extends React.Component<msg, any>{
    render() {
        return (
            <div>
                <h1>{this.props.msg}</h1>

                <hr /><h3>枚举 Enum</h3>
                <p>{Color.a + Color[99]}</p>

                <hr /><h3>interface</h3>
                {
                    <div>
                        <label>{showStu(new model('zhou', 15, ['假如生活抛弃了你', '入我天朝']))}</label>
                    </div>
                }

                <hr /><h3>Find_sort</h3>
                <p>{sort_Des([3, 2, 1, 5, 12, 3, 55])}</p>
                <p>{sort_Asc([3, 2, 1, 5, 12, 3, 55])}</p>
                <p>{sort_Asc(['m', 'a', 'y', 'z', 'b', 'x'])}</p>

                <hr /><h3>Find_sort</h3>
                <p>{showFind([3, 2, 1, 5, 12, 3, 55], 12)}</p>
            </div>
        )
    }
}
