"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
;
var Color;
(function (Color) {
    Color[Color["a"] = 97] = "a";
    Color[Color["b"] = 98] = "b";
    Color[Color["c"] = 99] = "c";
    Color[Color["d"] = 100] = "d";
    Color[Color["e"] = 101] = "e";
})(Color || (Color = {}));
var Ts = /** @class */ (function (_super) {
    __extends(Ts, _super);
    function Ts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ts.prototype.render = function () {
        return (<div>
        <h1>{this.props.msg}</h1>
        <h3>枚举 Enum</h3>
        <p>{Color.a + Color[Color.b]}</p>
      </div>);
    };
    return Ts;
}(React.Component));
exports.Ts = Ts;
