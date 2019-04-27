import * as React from 'react';

export interface obj { msg: string };

enum Color{
  a = 97, b, c, d, e
}

export class Ts extends React.Component<obj, any>{
  render(){
    return (
      <div>
        <h1>{this.props.msg}</h1>
        <h3>枚举 Enum</h3>
        <p>{Color.a + Color[99]}</p>
      </div>
    )
  }
}
