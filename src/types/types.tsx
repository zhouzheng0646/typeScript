import * as React from 'react';
import model from '../model/model';
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

        <h3>枚举 Enum</h3>
        <p>{Color.a + Color[99]}</p>

        <h3>interface</h3>
        {
          <div>
            <label>{showStu(new model('zhou', 15, ['假如生活抛弃了你', '入我天朝']))}</label>
          </div>
        }
      </div>
    )
  }
}
